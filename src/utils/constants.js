// Application constants

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const ANIMATION_DURATION = {
  fast: 150,
  base: 200,
  slow: 300,
};

export const SCROLL_OFFSET = 80;

export const FORM_VALIDATION_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  minLength: length => `Must be at least ${length} characters`,
  maxLength: length => `Must be no more than ${length} characters`,
  url: 'Please enter a valid URL',
  phone: 'Please enter a valid phone number',
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

export const LOCAL_STORAGE_KEYS = {
  THEME: 'portfolio_theme',
  LANGUAGE: 'portfolio_language',
};
