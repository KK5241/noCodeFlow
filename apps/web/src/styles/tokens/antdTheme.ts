import { type ThemeConfig } from 'antd';
import { getResolvedChartTokens, getResolvedColorTokens } from '@/styles/tokens/tokens';

const resolvedColorTokens = getResolvedColorTokens();
const resolvedChartTokens = getResolvedChartTokens();

export const antdTheme: ThemeConfig = {
  cssVar: { key: 'nocodeflow' },
  token: {
    colorPrimary: resolvedColorTokens.primary,
    colorSuccess: resolvedColorTokens.accent,
    colorWarning: resolvedChartTokens[4],
    colorError: resolvedColorTokens.destructive,
    colorInfo: resolvedColorTokens.accent,
    colorLink: resolvedColorTokens.accent,
    colorTextBase: resolvedColorTokens.foreground,
    colorBorder: resolvedColorTokens.border,
    colorBgBase: resolvedColorTokens.background,
  },
  components: {
    Input: {
      colorBgContainer: '#fff',
    },
    Button: {
      primaryShadow: 'none',
    },
    Collapse: {
      borderRadiusLG: 0,
      contentBg: resolvedColorTokens.background,
    },
  },
};
