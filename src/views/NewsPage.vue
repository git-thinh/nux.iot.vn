<template>
    <div>
		<h1>This is NewsPage</h1>
	</div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Page from '@/src/mixins/Page.vue';

@Component
export default class NewsPage extends Page {}
</script>