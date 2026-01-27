// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://Finerestaurant.github.io',
	base: '/new-token',
	integrations: [
		starlight({
			title: 'new_token',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ label: '서론', autogenerate: { directory: 'introduction' } },
				{ label: '동적 및 적응형 시스템', autogenerate: { directory: 'dynamic-adaptive-systems' } },
				{ label: '가설설정', autogenerate: { directory: 'hypothesis' } },
				{ label: '실험설계', autogenerate: { directory: 'experimental-design' } },
				{ label: '진행과정', autogenerate: { directory: 'progress' } },
				{ label: '참고문헌', autogenerate: { directory: 'references' } },
			],
		}),
	],
});
