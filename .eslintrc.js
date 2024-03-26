module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@funboxteam/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
    },
  },
  rules: {
    'import/extensions': 0,
  },
};
