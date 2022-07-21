<script lang="ts">
	import _ from 'lodash';

	import {
		Vue,
		Component,
		Getter
	} from 'nuxt-property-decorator';

	import {
		CreateElement,
		VNode
	} from 'vue/types';

	import {
		pageTemplates
	} from '@/src/page.templates';

	import {
		createPage
	} from '@/src/page.factory';

	import {
		Payload
	} from '@/src/types';

	@Component({
		components: {
			...pageTemplates
		},
		middleware: ['content']
	})
	export default class IndexPage extends Vue {
		asyncData(ctx: any) {
			return ctx.payload;
		}

		getMetaKeyword(name: any, refs: any[]) {
			let kw: string = 'keyword1, keyword2';
			return kw;
		}

		head() {
			return {
				title: 'NOT_FOUND'
			};
		}

		public render(h: CreateElement): VNode {
			return createPage(h, this);
		}
	}
</script>
