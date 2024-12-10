import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },  // Игнорировать директорию 'dist'
  {
    files: ['**/*.{js,jsx}'],  // Применение линтинга только к файлам .js и .jsx
    languageOptions: {
      ecmaVersion: 2020,  // Используем стандарт ECMAScript 2020
      globals: globals.browser,  // Использование глобальных переменных браузера
      parserOptions: {
        ecmaVersion: 'latest',  // Ожидаем последнюю версию ECMAScript
        ecmaFeatures: { jsx: true },  // Разрешаем использование JSX
        sourceType: 'module',  // Указываем, что код будет в формате ES-модулей
      },
    },
    settings: { react: { version: '18.3' } },  // Указываем версию React (здесь используется 18.3)
    plugins: {
      react,  // Подключение плагина для линтинга React
      'react-hooks': reactHooks,  // Подключение плагина для линтинга хуков React
      'react-refresh': reactRefresh,  // Подключение плагина для линтинга React Fast Refresh
    },
    rules: {
      ...js.configs.recommended.rules,  // Включаем стандартные правила для JS
      ...react.configs.recommended.rules,  // Включаем рекомендованные правила для React
      ...react.configs['jsx-runtime'].rules,  // Добавляем правила для JSX
      ...reactHooks.configs.recommended.rules,  // Включаем рекомендованные правила для React Hooks
      'react/jsx-no-target-blank': 'off',  // Отключаем правило для <a> тегов (предупреждение о том, что нужно использовать rel="noopener noreferrer")
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },  // Включаем предупреждение о компоненте, который должен быть экспортирован для Fast Refresh
      ],
    },
  },
]
