const varRef = (name: string) => `var(--${name})`;

// 在js中解析css变量
const resolveCssVar = (name: string) => {
  if (typeof window === 'undefined' || typeof getComputedStyle === 'undefined') {
    return varRef(name);
  }

  const value = getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim();

  return value || varRef(name);
};

// 圆角
export const radiusTokens = {
  lg: varRef('radius'),
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)',
} as const;

// 解析前的token（供tailwind 使用）
export const colorTokens = {
  background: varRef('background'),
  foreground: varRef('foreground'),
  card: varRef('card'),
  'card-foreground': varRef('card-foreground'),
  popover: varRef('popover'),
  'popover-foreground': varRef('popover-foreground'),
  primary: varRef('primary'),
  'primary-hover': varRef('primary-hover'),
  'primary-foreground': varRef('primary-foreground'),
  secondary: varRef('secondary'),
  'secondary-foreground': varRef('secondary-foreground'),
  muted: varRef('muted'),
  'muted-foreground': varRef('muted-foreground'),
  accent: varRef('accent'),
  'accent-foreground': varRef('accent-foreground'),
  destructive: varRef('destructive'),
  'destructive-foreground': varRef('destructive-foreground'),
  border: varRef('border'),
  input: varRef('input'),
  ring: varRef('ring'),
} as const;

export const chartTokens = {
  1: varRef('chart-1'),
  2: varRef('chart-2'),
  3: varRef('chart-3'),
  4: varRef('chart-4'),
  5: varRef('chart-5'),
} as const;

// 解析后的token（供antd 使用）
export const getResolvedColorTokens = () => ({
  background: resolveCssVar('background'),
  foreground: resolveCssVar('foreground'),
  card: resolveCssVar('card'),
  'card-foreground': resolveCssVar('card-foreground'),
  popover: resolveCssVar('popover'),
  'popover-foreground': resolveCssVar('popover-foreground'),
  primary: resolveCssVar('primary'),
  'primary-hover': resolveCssVar('primary-hover'),
  'primary-foreground': resolveCssVar('primary-foreground'),
  secondary: resolveCssVar('secondary'),
  'secondary-foreground': resolveCssVar('secondary-foreground'),
  muted: resolveCssVar('muted'),
  'muted-foreground': resolveCssVar('muted-foreground'),
  accent: resolveCssVar('accent'),
  'accent-foreground': resolveCssVar('accent-foreground'),
  destructive: resolveCssVar('destructive'),
  'destructive-foreground': resolveCssVar('destructive-foreground'),
  border: resolveCssVar('border'),
  input: resolveCssVar('input'),
  ring: resolveCssVar('ring'),
});

export const getResolvedChartTokens = () => ({
  1: resolveCssVar('chart-1'),
  2: resolveCssVar('chart-2'),
  3: resolveCssVar('chart-3'),
  4: resolveCssVar('chart-4'),
  5: resolveCssVar('chart-5'),
});

export const tailwindThemeTokens = {
  borderRadius: radiusTokens,
  colors: {
    ...colorTokens,
    chart: chartTokens,
  },
} as const;
