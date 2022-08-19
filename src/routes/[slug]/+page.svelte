<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

{#if data.content == '404'}
  <h2>404</h2>
  <p>Dead link, sorry...</p>
  <p><a href="/">Check out my website though</a></p>
{:else}
  <div class="heading">
    <div class="left">
      <h2>{data.metadata.title}</h2>
    </div>
    <div class="right">
      <p>{data.metadata.date}</p>
    </div>
  </div>

  {@html data.content}
{/if}

<style>
  .heading {
    color: white;
    width: 100%;
    background: url(fuzz.png) #353535;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    margin-left: -20px;
    border-radius: 20px;
  }
  .heading p, .heading h2 {
    margin: 0;
  }
  .heading .right {
    text-align: end;
  }
</style>