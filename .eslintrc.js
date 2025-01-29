module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended', // If using TypeScript
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript', // If using TypeScript
    'plugin:@next/next/recommended', // Next.js-specific linting rules
    'prettier', // Ensures Prettier and ESLint compatibility
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    // General ESLint rules
    'no-unused-vars': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    // React-specific rules
    'react/react-in-jsx-scope': 'off', // Not needed in Next.js
    'react/prop-types': 'off', // If using TypeScript
    'react/jsx-uses-react': 'off', // Not needed in React 17+
    'react/no-unescaped-entities': 'off', // Allow unescaped characters

    // Accessibility rules
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    // TypeScript-specific rules
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    // Next.js-specific rules
    '@next/next/no-html-link-for-pages': ['error', 'pages/'],
  },
};
