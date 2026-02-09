import { useState } from 'react';
import { Layout as AntLayout } from 'antd';
import AppHeader from '@/layout/header';
import { Sidebar } from '@/layout/sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleToggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <AntLayout style={{ height: '100vh' }}>
      <AppHeader />
      <AntLayout style={{ flex: 1, minHeight: 0 }}>
        <Sidebar collapsed={collapsed} onToggleCollapsed={handleToggleCollapsed} />
        <AntLayout style={{ minHeight: 0 }}>
          <AntLayout.Content style={{ minHeight: 0 }}>
            <div className="h-full">{<Outlet />}</div>
          </AntLayout.Content>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
