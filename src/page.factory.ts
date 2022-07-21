import { CreateElement, VNode } from 'vue/types';
import { pageTemplates } from './page.templates';

export function createPage(h: CreateElement, payload: any): VNode {

  // // if (!payload.route || !payload.route.contentAlias) {
  // //   console.error(`No render for ${payload.route ? payload.route.contentAlias : 'unknown'}`); // eslint-disable-line no-console
  // //   const page = h('errorPage');
  // //   return h('main', {}, [page]);
  // // }

  // if (payload === undefined || payload.route === undefined || payload.route.contentAlias === undefined) {
  //   //console.error(`page.factory.ts: No render for payload = `, payload); // eslint-disable-line no-console
  //   const page = h('errorPage');
  //   return h('main', {}, [page]);
  // }

  // let template = payload.route.contentAlias;
  // if (!pageTemplates[template]) {
  //   template = 'home';
  //   // console.error(`No render for ${template}`); // eslint-disable-line no-console
  //   // const page = h('errorPage', {
  //   //   props: payload
  //   // });
  //   // return h('main', {}, [page]);
  // }

  // const page = h(template, { props: payload });
  // const v = h('main', {}, [page]);
  // return v;
  
  
  const v = h('h1', {}, 'TEST PAGE');
  return v;
}
