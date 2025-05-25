import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

const theme = 'github-light';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: [
		'abap',
		'actionscript-3',
		'ada',
		'apache',
		'apex',
		'apl',
		'applescript',
		'ara',
		'asm',
		'astro',
		'awk',
		'ballerina',
		'bat',
		'berry',
		'bibtex',
		'blade',
		'c',
		'cadence',
		'clarity',
		'clojure',
		'cmake',
		'cobol',
		'codeql',
		'coffee',
		'cpp',
		'crystal',
		'csharp',
		'css',
		'cue',
		'd',
		'dart',
		'diff',
		'docker',
		'dream-maker',
		'elixir',
		'elm',
		'erb',
		'erlang',
		'fish',
		'fortran',
		'fsharp',
		'gdresource',
		'gdscript',
		'gdshader',
		'gherkin',
		'git-commit',
		'git-rebase',
		'glsl',
		'gnuplot',
		'go',
		'graphql',
		'groovy',
		'hack',
		'haml',
		'handlebars',
		'haskell',
		'hcl',
		'hlsl',
		'html',
		'ini',
		'java',
		'javascript',
		'jinja-html',
		'json',
		'json5',
		'jsonc',
		'jsonnet',
		'jssm',
		'jsx',
		'julia',
		'kotlin',
		'latex',
		'less',
		'liquid',
		'lisp',
		'logo',
		'lua',
		'make',
		'markdown',
		'markup',
		'matlab',
		'mdx',
		'nginx',
		'nim',
		'nix',
		'objective-c',
		'objective-cpp',
		'ocaml',
		'pascal',
		'perl',
		'php',
		'plsql',
		'postcss',
		'powerquery',
		'powershell',
		'prisma',
		'prolog',
		'proto',
		'pug',
		'puppet',
		'purescript',
		'python',
		'r',
		'raku',
		'razor',
		'reg',
		'rel',
		'riscv',
		'rst',
		'ruby',
		'rust',
		'sas',
		'sass',
		'scala',
		'scheme',
		'scss',
		'shaderlab',
		'shellscript',
		'smalltalk',
		'solidity',
		'sparql',
		'sql',
		'ssh-config',
		'stata',
		'stylus',
		'svelte',
		'swift',
		'system-verilog',
		'tasl',
		'tcl',
		'tex',
		'toml',
		'tsx',
		'turtle',
		'twig',
		'typescript',
		'v',
		'vb',
		'verilog',
		'vhdl',
		'viml',
		'vue',
		'wasm',
		'wenyan',
		'xml',
		'xsl',
		'yaml'
	]
});

const mdsvex_config = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvex_config)],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: false
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
					return;
				}
			}
		}
	}
};

export default config;
