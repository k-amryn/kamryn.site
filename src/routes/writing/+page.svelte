<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

{#each data.content as page}
    <p><a sveltekit:prefetch href={page.link}>{page.title}</a></p>
{/each}