<script>
  import healthStore from "../store/health.js";
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");

  h2,
  p {
    margin-bottom: 0;
    /* box-sizing: border-box; */
  }

  h2 {
    font-size: 45px;
    font-weight: 300;
    margin: 10px;
  }

  h2 span {
    font-size: 30px;
  }

  p {
    font-size: 20px;
  }

  .body {
    min-height: 100vh;
    background: #333;
  }

  .imgBox {
    color: #fff;
    font-family: "Roboto", sans-serif;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(4, 1fr); */
    grid-gap: 10px;
  }

  .imgBox > div {
    cursor: pointer;
    height: 25vh;
    background-size: cover;
    background-attachment: fixed;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: all 0.5s ease-in;
  }

  .imgBox > div:hover {
    opacity: 0.7;
    transform: scale(0.98);
  }

  .imgBox > div:nth-of-type(1) {
    grid-column: 1 / 3;
  }

  .imgBox > div:nth-of-type(6) {
    grid-column: 3 / 5;
  }

  .imgBox > div:nth-of-type(9) {
    grid-column: 3 / 5;
  }

  .imgBox > div:nth-of-type(10) {
    grid-column: 1 / 3;
  }

  @media (max-width: 575px) {
    .imgBox {
      display: flex;
      flex-direction: column;
    }
    .imgBox > div {
      margin-bottom: 10px;
    }
  }
  .bg1 {
    background: url(https://i.ibb.co/dBLbrRV/bg1.jpg);
  }

  .bg2 {
    background: url(https://i.ibb.co/Fb5jb3J/bg2.jpg);
    color: #333;
  }
</style>

<div class="body">
  <div class="imgBox">
    {#each $healthStore as item}
      <div class={item.imgSrc}>
        <h2>
          {#if item.flag}
            {item.value}
            <span>{item.unit}</span>
          {:else}
            <i class={item.icon} />
          {/if}
        </h2>
        <p>{item.result}</p>
      </div>
    {:else}
      <p>Loading</p>
    {/each}
  </div>
</div>
