<script>
  import { onMount } from "svelte";

  let hamburger = "burger-menu.png";
  let vacation = "vacation.jpg";
  let hero, slider, logo, burger, title

  onMount(() => {
    const tl = new TimelineMax();

    tl
      .fromTo(
        hero,
        1,
        { height: '0' },
        { height: '80%', ease: Power2.easeInOut }
      )
      .fromTo(
        hero, 
        1.2, 
        { width: '100%' }, 
        { width: '80%', ease: Power2.easeInOut }
      )
      .fromTo(
        slider,
        1.2,
        { x: '-100%' },
        { x: '0%', ease: Power2.easeInOut },
        '-=1.2'
      )
      .fromTo(
        logo,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        burger,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        title,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      
  });
</script>

<style>
  .body {
    position: relative;
    font-family: "Poppins", sans-serif;
  }
  .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to left, #ba7453, #d1a984);
    z-index: -1;
  }
  nav {
    display: grid;
    grid-template-columns: 10% 1fr 1fr 10%;
    min-height: 10vh;
    color: white;
    align-items: center;
  }
  .logo {
    grid-column: 2/3;
    font-size: 24px;
  }
  .hamburger {
    justify-self: end;
  }
  section {
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;
    /* background: lightblue; */
  }
  .hero {
    height: 60%;
    width: 100%;
    position: relative;
  }
  .hero img {
    width: 100%;
    height: 100%; /* height: 80vh */
    object-fit: cover;
  }
  .headline {
    position: absolute;
    top: 70%;
    left: 10%;
    font-size: 100px;
    transform: translate(-20%, -70%);
    color: white;
    z-index: 5;
  }
  .hero::after {
    content: "";
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    left: 0;
    top: 0;
    opacity: 0.5;
  }
  @media (max-width: 860px) {
    .headline {
      font-size: 30px;
      top: 90%;
    }
  }
</style>

<div class="body">
  <header>
    <nav>
      <h3 class="logo" bind:this={logo}>Dream Vacation</h3>
      <i class="fas fa-bars fa-2x hamburger" bind:this={burger} />
    </nav>
    <section>
      <div class="hero" bind:this={hero}>
        <img src={vacation} alt="vacation" />
        <h1 class="headline" bind:this={title}>Dream Big</h1>
      </div>
    </section>
  </header>
  <div class="slider" bind:this={slider} />
</div>
