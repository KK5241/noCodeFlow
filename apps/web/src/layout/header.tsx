import {
  AppstoreFilled,
  CheckCircleOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  PlayCircleFilled,
} from '@ant-design/icons';
import { Button, Divider } from 'antd';

const Header = () => {
  return (
    <header className="border-b border-[#e6e6e6] bg-[#f6f6f7]">
      <div className="flex h-12 items-center justify-between bg-white px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#62c767] text-white">
            <AppstoreFilled style={{ fontSize: 14 }} />
          </div>
          <span className="text-sm font-semibold text-foreground">Visual AI Workflow Builder</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-small text-[#666]">Untitled Workflow</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-[#f4f4f4] px-3 py-1.5 text-[15px] text-[#222]">
            <CheckCircleOutlined style={{ fontSize: 14 }} />
            <span>Ready</span>
          </div>
          <Divider type="vertical" style={{ margin: 0, height: 24 }} />
          <Button type="text" icon={<QuestionCircleOutlined />} />
          <Button type="text" icon={<SettingOutlined />} />
          <Button
            type="primary"
            icon={<PlayCircleFilled />}
            style={{
              height: 40,
              borderRadius: 10,
              background: '#151515',
              borderColor: '#151515',
              paddingInline: 16,
              fontWeight: 500,
            }}
          >
            Run Workflow
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
