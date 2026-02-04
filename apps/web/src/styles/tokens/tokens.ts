const varRef = (name: string) => `var(--${name})`;

// 圆角
export const radiusTokens = {
  lg: varRef('radius'),
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)',
} as const;

// 主题色
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

export const sidebarTokens = {
  background: varRef('sidebar-background'),
  foreground: varRef('sidebar-foreground'),
  primary: varRef('sidebar-primary'),
  'primary-foreground': varRef('sidebar-primary-foreground'),
  accent: varRef('sidebar-accent'),
  'accent-foreground': varRef('sidebar-accent-foreground'),
  border: varRef('sidebar-border'),
  ring: varRef('sidebar-ring'),
} as const;

export const tailwindThemeTokens = {
  borderRadius: radiusTokens,
  colors: {
    ...colorTokens,
    chart: chartTokens,
    sidebar: {
      DEFAULT: sidebarTokens.background,
      foreground: sidebarTokens.foreground,
      primary: sidebarTokens.primary,
      'primary-foreground': sidebarTokens['primary-foreground'],
      accent: sidebarTokens.accent,
      'accent-foreground': sidebarTokens['accent-foreground'],
      border: sidebarTokens.border,
      ring: sidebarTokens.ring,
    },
  },
} as const;

export type ColorTokenName = keyof typeof colorTokens;
export type RadiusTokenName = keyof typeof radiusTokens;
