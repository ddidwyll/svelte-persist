module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: '*.svelte',
      processor: 'svelte3/svelte3',
      rules: {
        'no-unused-expressions': 0,
        'no-return-assign': 0,
        'eol-last': 0
      }
    }
  ],
  rules: {}
}
