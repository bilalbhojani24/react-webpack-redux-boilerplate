module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'max-len': ['warn', { code: 80 }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
