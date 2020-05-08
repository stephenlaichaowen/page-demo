<script>
  import dataStore from "../store/dataStore.js";
</script>

<style>
  /* .burger {
    display: inline-block;
  }  
  .line {
    height: 3px;
    background: white;
    margin: 3px;
  }
  .line1 { width: 30px; }
  .line2 { width: 20px; }
  .line3 { width: 10px; }
  .portfolio {
    position: relative;
    color: white;
    background: radial-gradient(rgba(43, 55, 96, 1), rgba(11, 16, 35, 1));
  }
  nav {
    min-height: 10vh;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 20px;
  } */
  .portfolio {
    position: relative;
    color: white;
    background: radial-gradient(rgba(43, 55, 96, 1), rgba(11, 16, 35, 1));
  }
  .page {
    min-height: 90vh;
    display: grid;
    grid-template-columns: 5% 1fr 1fr 1fr 5%;
  }
  .hero {
    overflow: hidden;
    height: 500px;
    align-self: center;
    justify-content: center;
    display: flex;
  }
  .hero img {
    height: 500px;
    transition: transform 0.3s ease-out;
    cursor: pointer;
  }
  .model-right {
    transform: translate(0%, 10%);
  }
  .model-left {
    transform: translate(0%, -10%);
  }
  .hero:hover .model-right {
    transform: translate(0%, 0%);
  }
  .hero:hover .model-left {
    transform: translate(0%, 0%);
  }
  .details {
    grid-column: 2 / 3;
    align-self: end;
  }
  .details h1 {
    font-size: 64px;
    /* font-family: PopRegular; */
  }
  .details h2 {
    font-size: 42px;
    padding: 20px 0px;
  }
  .details p {
    font-size: 24px;
    padding: 20px 0px 50px 0px;
  }
  /* main {
    position: relative;
  } */
  .pages {
    position: fixed;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
  }
  .pages > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pages h3 {
    font-size: 24px;
    padding: 30px;
  }
  .pages svg {
    cursor: pointer;
    opacity: 0.5;
    transform: scale(2);
  }
  .pages svg:hover {
    animation: dot 0.5s ease-in-out infinite alternate;
  }
  .pages svg.active {
    opacity: 1;
  }
  @keyframes dot {
    0% {
      transform: scale(2);
    }
    100% {
      transform: scale(4);
    }
  }
  @media (max-width: 1024px) {
    .page {
      grid-template-columns: 5% 1fr 5%;
      grid-template-rows: 2fr 1fr;
      align-items: center;
    }
    .hero {
      grid-column: 2 / 3;
      height: auto;
    }
    .hero img {
      height: 500px;
    }
    .details {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      text-align: center;
    }
    .details h1 {
      font-size: 48px;
    }
    .details h2 {
      font-size: 38px;
    }
  }
  @media (max-width: 768px) {
    /* .page {
      grid-template-rows: 2fr 1fr
    } */
    .hero img {
      height: 400px;
    }
    .details h1 {
      font-size: 38px;
    }
    .details h2 {
      font-size: 28px;
    }
  }
</style>

<div class="portfolio">
  <header>
    <!-- <nav>
      <h3 class="logo">Dimitri Marco</h3>
      <div class="burger">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
      </div>
    </nav> -->
    <main>
      {#each $dataStore.photographer as item}
        <section class="page">
          <div class="details">
            <h1>{item.name}</h1>
            <h2>{item.title}</h2>
            <p>{item.date}</p>
          </div>
          <div class="hero">
            <img class="model-left" src={item.imageLeft} alt="model" />
            <img class="model-right" src={item.imageRight} alt="model" />
          </div>
        </section>
      {:else}
        <p>Loading...</p>
      {/each}
      <div class="pages">
        {#each $dataStore.indicator as item}
          <div class="page-x">
            <h3>{item.number}</h3>
            <svg
              class="slide active"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
          </div>
        {:else}
          <p>Loading...</p>
        {/each}
      </div>
    </main>
  </header>
</div>
