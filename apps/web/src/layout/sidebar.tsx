import { ApartmentOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Layout, Tooltip } from 'antd';

const { Sider } = Layout;

const workflows = [
  {
    id: 'image-classification',
    title: 'Image Classification Pipeline',
  },
  {
    id: 'text-summary',
    title: 'Text Summarization',
  },
  {
    id: 'data-preprocessing',
    title: 'Data Preprocessing',
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis',
  },
  {
    id: 'document-extraction',
    title: 'Document Extraction',
  },
];

type AppSidebarProps = {
  collapsed: boolean;
};

export function Sidebar({ collapsed }: AppSidebarProps) {
  return (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={300}
      collapsedWidth={72}
      style={{ borderRight: '1px solid #e8e8e8', background: '#f5f5f5' }}
    >
      <div className="flex h-full flex-col">
        <div className="border-b border-[#e8e8e8] px-3 py-4">
          <div className="mb-3 flex items-center justify-between">
            {!collapsed && (
              <span className="font-semibold tracking-wide text-[#666]">WORKFLOWS</span>
            )}
            <Button
              type="text"
              icon={<PlusOutlined />}
              size="small"
              style={{ color: '#444', width: 28, height: 28 }}
            />
          </div>

          {!collapsed && (
            <Input
              prefix={<SearchOutlined className="text-[#9a9a9a]" />}
              placeholder="Search workflows..."
              style={{ borderRadius: 10, background: '#fff' }}
            />
          )}
        </div>

        <div className="flex-1 overflow-auto p-2">
          {workflows.map((workflow, index) => {
            const isActive = index === 0;

            return (
              <Tooltip key={workflow.id} title={collapsed ? workflow.title : ''} placement="right">
                <button
                  type="button"
                  className={`mb-1 w-full rounded-xl px-3 py-2 text-left transition ${
                    isActive ? 'bg-[#e7e7e7]' : 'hover:bg-[#ebebeb]'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <ApartmentOutlined className="mt-0.5 text-[#7a7a7a]" />
                    {!collapsed && (
                      <div className="min-w-0">
                        <div className="truncate font-medium text-[#1f1f1f]">{workflow.title}</div>
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
