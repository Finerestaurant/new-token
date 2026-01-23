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
				{ label: '서론', autogenerate: { directory: '서론' } },
				{ label: '핵심철학', autogenerate: { directory: '핵심철학' } },
				{ label: '가설설정', autogenerate: { directory: '가설설정' } },
				{ label: '실험설계', autogenerate: { directory: '실험설계' } },
				{ label: '진행과정', autogenerate: { directory: '진행과정' } },
				{ label: '참고문헌', autogenerate: { directory: '참고문헌' } },
			],
		}),
	],
});
