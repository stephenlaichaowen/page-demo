<script>
  function selectItem() {
    alert("Please select an item !");
  }

  function addToCart() {
    alert("Item has been added to cart !");
  }
</script>

<style>
  /* .body {
    position: relative;
  } */
  .presentation {
    display: flex;
    width: 90%;
    margin: auto;
    min-height: 80vh;
    align-items: center;
    --theme-color: #585772;
    --cta-select-color: #c36cbb;
  }
  .cover {
    display: flex;
    flex: 1;
    justify-content: center;
    height: 60vh;
  }
  .cover img {
    height: 100%;
    filter: drop-shadow(0px 5px 3px black);
    animation: drop 1.5s ease;
  }
  .introduction {
    /* background: lightblue; */
    flex: 1;
  }
  .intro-text h1 {
    font-size: 44px;
    font-weight: 500;
    background: linear-gradient(to right, #494964, #6f6f89);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .intro-text p {
    margin-top: 5px;
    font-size: 22px;
    color: var(--theme-color);
  }
  .cta {
    padding-top: 50px;
  }
  .btn {
    width: 150px;
    height: 50px;
    cursor: pointer;
    font-size: 16px;
  }
  .cta-select {
    border: 2px solid var(--cta-select-color);
    background: transparent;
    color: var(--cta-select-color);
  }
  .cta-add {
    background: var(--cta-select-color);
    border: none;
    color: white;
    margin: 30px 0 0 30px;
  }
  .circle {
    position: absolute;
    z-index: -1;
  }
  .big-circle {
    top: 0;
    right: 0;
    opacity: 0.5;
    height: 80%;
  }
  .mid-circle {
    top: 30%;
    right: 30%;
    height: 60%;
    opacity: 0.4;
  }
  .small-circle {
    bottom: 0%;
    left: 20%;
  }
  .laptop-select {
    width: 15%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    right: 20%;
    /* bottom: 5%; */
  }
  @keyframes drop {
    0% {
      opacity: 0;
      transform: translateY(-80px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media (max-width: 1024px) {
    .presentation {
      flex-direction: column;
    }
    .introduction {
      margin-top: 5vh;
      text-align: center;
    }
    .intro-text h1 {
      font-size: 30px;
    }
    .intro-text p {
      font-size: 18px;
    }
    .cta {
      padding: 10px 0 0 0;
    }
    .laptop-select {
      bottom: 5%;
      left: 50%;
      width: 50%;
      transform: translate(-50%, -5%);
    }
    .cover img {
      height: 80%;
    }
    .small-circle,
    .mid-circle,
    .big-circle {
      opacity: 0.2;
    }
  }
  @media (max-width: 575px) {
    .cover {
      z-index: -1;
    }
    /* .cta-select {
      z-index: 2;
    } */
  }
  @media (max-width: 480px) {
    .big-circle,
    .mid-circle,
    .small-circle {
      display: none;
    }
    .cover img {
      height: 35vh;
    }
    .intro-text p {
      font-size: 14px;
    }
    .cta {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .cta-add {
      margin: 10px;
    }
  }
  @media (max-width: 390px) {
    /* .laptop-select {
      bottom: 20px;
    } */
    .intro-text h1 {
      font-size: 20px;
    }
    .intro-text p {
      font-size: 12px;
    }    
  }
</style>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="body">
  <section class="presentation">
    <div class="introduction">
      <div class="intro-text">
        <h1>Laptop for the future</h1>
        <p>
          The new 14 inch bezeless display offering a 4K display with touch
          screen.
        </p>

      </div>
      <div class="cta">
        <button class="btn cta-select" on:click={selectItem}>14 Inch</button>
        <button class="btn cta-add" on:click={addToCart}>Add To Cart</button>
      </div>
    </div>
    <div class="cover">
      <img src="/img/matebook.png" alt="matebook" />
    </div>
  </section>

  <div class="laptop-select">
    <img src="/img/arrow-left.svg" alt="left arrow" />
    <img src="/img/dot.svg" alt="dot" />
    <img src="/img/dot-full.svg" alt="dot" />
    <img src="/img/dot-full.svg" alt="dot" />
    <img src="/img/arrow-right.svg" alt="right arrow" />
  </div>

  <img class="circle big-circle" src="/img/big-eclipse.svg" alt="" />
  <img class="circle mid-circle" src="/img/mid-eclipse.svg" alt="" />
  <img class="circle small-circle" src="/img/small-eclipse.svg" alt="" />
</div>
