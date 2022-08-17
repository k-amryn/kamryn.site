<script>
    import "../global.css"
</script>

<div class="wrap">
    <div class="nav">
        <span><a sveltekit:prefetch href="/">kamryn.site</a></span>
        <span><a sveltekit:prefetch href="/software">software</a></span>
        <span><a sveltekit:prefetch href="/art">art projects</a></span>
        <span><a sveltekit:prefetch href="/writing">writing</a></span>
    </div>

    <main>
        <slot />
    </main>
</div>

<style>
    .wrap {
        margin: auto;
        width: 100%;
        max-width: 900px;
    }
    .nav {
        margin: auto;
        display: flex;
        width: 100%;
        height: 80px;
        place-content: center;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px;
    }
    a {
        color: black;
    }
    main {
        margin-top: 50px;
        width: 100%;
        max-width: 900px;
        margin: auto;
    }
</style>
