// @ts-check

import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	prettierConfig,
	{
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		ignores: [
			'*/.eslintrc.json',
			'*/vite.config.ts',
			'*/postcss.config.mjs',
			'*/tailwind.config.js',
			'*/commitlint.config.cjs',
			'*/playwright.config.ts',
			'*/vitest.setup.ts',
			'*/routeTree.gen.ts',
		],
		plugins: {
			unicorn: eslintPluginUnicorn,
			react: eslintPluginReact,
			reactHooks: eslintPluginReactHooks,
			reactRefresh: eslintPluginReactRefresh,
		},
		rules: {
			'no-await-in-loop': 'error',
			'no-constant-binary-expression': 'error',
			'no-duplicate-imports': 'error',
			'no-new-native-nonconstructor': 'error',
			'no-promise-executor-return': 'error',
			'no-self-compare': 'error',
			'no-template-curly-in-string': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unreachable-loop': 'error',
			'no-unused-private-class-members': 'error',
			'no-use-before-define': 'error',
			'require-atomic-updates': 'error',
			camelcase: 'error',
			'@typescript-eslint/adjacent-overload-signatures': 'error',
			'@typescript-eslint/array-type': ['error', { default: 'generic' }],
			'@typescript-eslint/consistent-type-exports': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/explicit-member-accessibility': 'error',
			'@typescript-eslint/explicit-module-boundary-types': 'error',
			'@typescript-eslint/no-confusing-void-expression': 'error',
			'@typescript-eslint/no-import-type-side-effects': 'error',
			'@typescript-eslint/no-require-imports': 'error',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-useless-empty-export': 'error',
			'@typescript-eslint/prefer-enum-initializers': 'error',
			'@typescript-eslint/prefer-readonly': 'error',
			'no-return-await': 'off',
			'@typescript-eslint/return-await': 'error',
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'unicorn/custom-error-definition': 'error',
			'unicorn/empty-brace-spaces': 'error',
			'unicorn/no-array-for-each': 'off',
			'unicorn/no-array-reduce': 'off',
			'unicorn/no-console-spaces': 'error',
			'unicorn/no-null': 'off',
			'unicorn/filename-case': [
				'error',
				{
					cases: {
						kebabCase: true,
						pascalCase: true,
					},
				},
			],
			'unicorn/prevent-abbreviations': [
				'error',
				{
					replacements: {
						db: false,
						arg: false,
						args: false,
						env: false,
						fn: false,
						func: {
							fn: true,
							function: false,
						},
						prop: false,
						props: false,
						ref: false,
						refs: false,
					},
					ignore: ['semVer', 'SemVer'],
				},
			],
		},
	}
);
