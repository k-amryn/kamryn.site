<script>
    import "../global.css"
</script>

<div class="wrap">
    <div class="nav">
        <span><a href="/">kamryn.site</a></span>
        <span><a href="/software">software</a></span>
        <span><a href="/art">art projects</a></span>
        <span><a href="/writing">writing</a></span>
    </div>

    <slot />
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
</style>