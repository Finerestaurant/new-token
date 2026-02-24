// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	site: 'https://Finerestaurant.github.io',
	base: '/new-token',
	integrations: [
		starlight({
			title: 'new_token',
			plugins: [starlightThemeRapide()],
			lastUpdated: true,
			pagination: false,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ label: '서론', autogenerate: { directory: 'introduction' } },
				{
					label: '내 생각의 전개 (My Thoughts & Hypotheses)',
					autogenerate: { directory: 'my-thoughts' }
				},
				{
					label: '학계의 흐름 (Academic Landscape)',
					autogenerate: { directory: 'academic-landscape' }
				}
			],
		}),
	],
});
