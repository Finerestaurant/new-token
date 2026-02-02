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
				{ label: '동적 및 적응형 시스템', autogenerate: { directory: 'dynamic-adaptive-systems' } },
				{
					label: '가설',
					items: [
						{ label: '초기 가설', autogenerate: { directory: 'hypothesis' } },
						{ label: 'Multi-Stream 아키텍처', autogenerate: { directory: 'multi-stream' } },
					],
				},
				{ label: '실험설계', autogenerate: { directory: 'experimental-design' } },
				{ label: '진행과정', autogenerate: { directory: 'progress' } },
				{ label: '참고문헌', autogenerate: { directory: 'references' } },
			],
		}),
	],
});
