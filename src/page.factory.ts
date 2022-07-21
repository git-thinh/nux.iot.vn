import { CreateElement, VNode } from 'vue/types';
import { pageTemplates } from './page.templates';

export function createPage(h: CreateElement, payload: any): VNode {
	//const page = h('errorPage', { props: payload });
	const page = h('homePage', { props: payload });	
	//const v = h('main', {}, [page]);
	//const v = h('h1', {}, 'TEST PAGE');	
	//return v;	
	return page;
}
