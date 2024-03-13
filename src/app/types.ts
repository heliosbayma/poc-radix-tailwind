export type ButtonVariant = typeof ButtonVariant[keyof typeof ButtonVariant];
export const ButtonVariant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TEXT: 'text',
  DANGER: 'danger',
  WARNING: 'warning',
  TEXT_WARNING: 'textWarning',
} as const;

export type ButtonSize = typeof ButtonSize[keyof typeof ButtonSize];
export const ButtonSize = {
  MD: 'md',
  LG: 'lg',
} as const;
