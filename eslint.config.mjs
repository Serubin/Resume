import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextCoreWebVitals,
  // Flat config does not read .gitignore, and .claude/worktrees/ holds full copies of app/ and
  // components/ that would otherwise get linted alongside the real ones.
  { ignores: ['.claude/**'] },
  {
    rules: {
      'jsx-quotes': ['error', 'prefer-double'],
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
    },
  },
];

export default config;
