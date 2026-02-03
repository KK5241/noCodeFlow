import {
  CalendarOutlined,
  HomeOutlined,
  InboxOutlined,
  SearchOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';

const { Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: 'inbox',
    icon: <InboxOutlined />,
    label: 'Inbox',
  },
  {
    key: 'calendar',
    icon: <CalendarOutlined />,
    label: 'Calendar',
  },
  {
    key: 'search',
    icon: <SearchOutlined />,
    label: 'Search',
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
];

type AppSidebarProps = {
  collapsed: boolean;
};

export function AppSidebar({ collapsed }: AppSidebarProps) {
  return (
    <Sider
      theme="dark"
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={240}
      collapsedWidth={80}
    >
      <div className="flex h-16 items-center gap-2 px-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-500 text-white">
          F
        </div>
        {!collapsed && <span className="text-lg font-bold text-white">Flow</span>}
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']} items={items} />
    </Sider>
  );
}
