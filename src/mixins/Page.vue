<script lang="ts">
	import {
		Component,
		Prop,
		Vue
	} from 'nuxt-property-decorator';

	@Component({
		components: {}
	})

	export default class PageMixin extends Vue {
		@Prop() route!: any;
	}
</script>
