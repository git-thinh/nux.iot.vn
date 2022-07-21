import { Middleware } from '@nuxt/types';
import _ from 'lodash';
import {
	Payload
} from '@/src/types';

const contentMiddleware: Middleware = async (ctx: any) => {
	// Wrap in a try catch, and throw a 500 if something goes wrong on the request
	let path = decodeURIComponent(ctx.route.fullPath);
	console.log('PATH = ' + path);
	const payload: Payload = { ok: true, status: 200, message: '', request: { path: path } };
	try {
		//payload = (await ctx.app.$contentApi.getDataJson(urlProDetail)).data;

	} catch (error) {
		payload.ok = false;
		payload.status = 500;
		payload.message = error.message;
	}
	ctx.payload = payload;
	return ctx;
};

export default contentMiddleware;
