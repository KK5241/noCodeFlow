import { CheckCircleOutlined, QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Divider, Layout } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header
      className="border-b border-[#e6e6e6] bg-white"
      style={{ height: 56, lineHeight: 'normal', paddingInline: 0 }}
    >
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#62c767] text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-accent-foreground"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-foreground">Visual AI Workflow Builder</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm text-[#666]">Untitled Workflow</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-[#f4f4f4] px-3 py-1.5">
            <CheckCircleOutlined />
            <span>Ready</span>
          </div>

          <Divider orientation="vertical" style={{ borderColor: '#e6e6e6' }} />
          <Button type="text" icon={<QuestionCircleOutlined />} />
          <Button type="text" icon={<SettingOutlined />} />
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
