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
				{ label: 'AGI의 조건과 구현', autogenerate: { directory: 'agi-implementation' } },
				{ label: '가설설정', autogenerate: { directory: 'hypothesis' } },
				{ label: '실험설계', autogenerate: { directory: 'experimental-design' } },
				{ label: '진행과정', autogenerate: { directory: 'progress' } },
				{ label: '참고문헌', autogenerate: { directory: 'references' } },
			],
		}),
	],
});
