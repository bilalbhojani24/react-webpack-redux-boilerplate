const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        '@typescript-eslint',
    ],
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/adjacent-overload-signatures': ['error'],
        '@typescript-eslint/ban-ts-comment': [1],
        '@typescript-eslint/no-require-imports': ['error'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['warn'],
        'no-console': 1,
        'no-use-before-define': 0,
        'no-unused-vars': 2,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
