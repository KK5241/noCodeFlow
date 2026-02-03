import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout as AntLayout } from 'antd';
import { useState, type ReactNode } from 'react';
import { AppSidebar } from '@/layout/appSidebar';

const Layout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <AppSidebar collapsed={collapsed} />
      <AntLayout>
        <AntLayout.Header
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            background: '#fff',
            borderBottom: '1px solid #f0f0f0',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed((value) => !value)}
            style={{ fontSize: 18, width: 40, height: 40 }}
          />
        </AntLayout.Header>
        <AntLayout.Content style={{ height: 'calc(100vh - 64px)' }}>
          <div className="h-full">{children}</div>
        </AntLayout.Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
