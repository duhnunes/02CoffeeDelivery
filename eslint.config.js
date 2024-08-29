import js from '@eslint/js'
import globals from 'globals'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

import reactHooks from 'eslint-plugin-react-hooks'
import rocketseatEslintConfig from '@rocketseat/eslint-config/react.mjs'

import simpleImportSort from 'eslint-plugin-simple-import-sort'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  ...rocketseatEslintConfig,
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      '@stylistic': stylistic,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'simple-import-sort/imports': 'error',
      '@stylistic/jsx-self-closing-comp': ['off', {
        component: true,
        html: true,
      }],
      'react/self-closing-comp': 'off',
      '@stylistic/indent': ['error', 2],
      '@stylistic/jsx-closing-bracket-location': 'error',
      '@stylistic/jsx-closing-tag-location': 'error',
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiprop'],
      '@stylistic/jsx-function-call-newline': ['error', 'always'],
      '@stylistic/jsx-max-props-per-line': ['error', {
        maximum: 1,
      }],
    },
  },
)
