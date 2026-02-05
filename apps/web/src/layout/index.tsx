import { type ReactNode } from 'react';
import { Layout as AntLayout } from 'antd';
import Header from '@/layout/header';
import { Sidebar } from '@/layout/sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
  const collapsed = false;

  return (
    <AntLayout style={{ height: '100vh' }}>
      <Header />
      <AntLayout style={{ flex: 1, minHeight: 0 }}>
        <Sidebar collapsed={collapsed} />
        <AntLayout style={{ minHeight: 0 }}>
          <AntLayout.Content style={{ minHeight: 0 }}>
            <div className="h-full">{children}</div>
          </AntLayout.Content>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
