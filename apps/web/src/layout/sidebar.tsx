import {
  ApartmentOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { useMemo, useState } from 'react';
import { Button, Empty, Input, Layout, Spin, Tooltip } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import useWorkflowHistoryStore from '@/store';
import { normalizeSearchText } from '@/utils/search';

const { Sider } = Layout;

type AppSidebarProps = {
  collapsed: boolean;
  onToggleCollapsed: () => void;
};

export function Sidebar({ collapsed, onToggleCollapsed }: AppSidebarProps) {
  const navigate = useNavigate();
  const { conversationId } = useParams<{ conversationId: string }>();
  const [searchText, setSearchText] = useState('');
  const workflowHistories = useWorkflowHistoryStore((state) => state.workflowHistories);
  const loadingWorkflowHistories = useWorkflowHistoryStore(
    (state) => state.loadingWorkflowHistories
  );

  const normalizedSearch = normalizeSearchText(searchText);

  const filteredHistories = useMemo(() => {
    if (!normalizedSearch) {
      return workflowHistories;
    }
    return workflowHistories.filter((conversation) =>
      conversation.title.toLowerCase().includes(normalizedSearch)
    );
  }, [workflowHistories, normalizedSearch]);

  return (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={300}
      collapsedWidth={55}
    >
      <div className="flex h-full flex-col">
        <div className="border-b border-[#e8e8e8] px-3 py-4">
          <div className="mb-3 flex items-center justify-between">
            {!collapsed && (
              <span className="font-semibold tracking-wide text-[#666]">WORKFLOWS</span>
            )}
            <div className="flex items-center gap-1">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                size="small"
                style={{ color: '#444', width: 28, height: 28 }}
                onClick={onToggleCollapsed}
              />
            </div>
          </div>

          {!collapsed && (
            <Input
              prefix={<SearchOutlined className="text-[#9a9a9a]" />}
              placeholder="Search workflows..."
              style={{ borderRadius: 10, background: '#fff' }}
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              allowClear
            />
          )}
        </div>

        <div className="flex-1 overflow-auto p-2">
          {loadingWorkflowHistories && (
            <div className="flex justify-center pt-4">
              <Spin size="small" />
            </div>
          )}

          {/* 无对话记录展示空icon */}
          {!loadingWorkflowHistories && filteredHistories.length === 0 && !collapsed && (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={normalizedSearch ? 'No matching workflows' : 'No conversations'}
            />
          )}

          {/* 工作流历史记录 */}
          {filteredHistories.map((conversation) => {
            const isActive = conversation.id === conversationId;
            return (
              <Tooltip
                key={conversation.id}
                title={collapsed ? conversation.title : ''}
                placement="right"
              >
                <button
                  type="button"
                  onClick={() => navigate(`/workflow/${conversation.id}`)}
                  className={`mb-1 w-full rounded-xl px-3 py-2 text-left transition ${
                    isActive ? 'bg-[#e7e7e7]' : 'hover:bg-[#ebebeb]'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <ApartmentOutlined className="mt-0.5 text-[#7a7a7a]" />
                    {!collapsed && (
                      <div className="min-w-0">
                        <div className="truncate font-medium text-[#1f1f1f]">
                          {conversation.title}
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              </Tooltip>
            );
          })}
        </div>

        <div className="border-t border-[#e8e8e8] p-3">
          <Button
            type="primary"
            block={!collapsed}
            icon={<PlusOutlined />}
            style={{ borderRadius: 10, height: 42, fontWeight: 600 }}
          >
            {!collapsed ? 'New Workflow' : undefined}
          </Button>
        </div>
      </div>
    </Sider>
  );
}
