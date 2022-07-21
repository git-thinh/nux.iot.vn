<template>
	<article class="error-page">
		<section>
			<h2>ErrorPage</h2>
		</section>
	</article>
</template>

<script lang="ts">
	import {
		Component,
		Prop
	} from 'nuxt-property-decorator';

	import Page from '@/src/mixins/Page.vue';
	@Component
	export default class ErrorPage extends Page {
	}
</script>