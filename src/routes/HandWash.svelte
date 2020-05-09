<script>
  import { fade } from 'svelte/transition'
  import Timer from "../components/HandWash/Timer.svelte";
  import HowTo from "../components/HandWash/HowTo.svelte";

  let imgHref = "https://www.who.int/gpsc/clean_hands_protection/en/";
  let soundHref = "https://freesound.org/people/metrostock99/sounds/345086";
  let soundSrc = "handwashing/sound.wav";
  let audio;

  function timerEnds(e) {
    // alert(`timer ends !`)
    audio.play();
  }
</script>

<style>
  h1 {
    margin-top: 2rem;
    text-align: center;
  }
  h3 {
    /* border: 1px solid; */
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
    width: 550px;
  }
  @media (max-width: 575px) {
    .body {
      padding-bottom: 0.5rem;
    }
    h1 {
      font-size: 28px;
    }
    h3 {
      font-size: 20px;
      width: 90%;
      margin: 0.5rem auto;
      /* border: 1px solid; */
    }
  }
</style>

<div class="body" transition:fade={{ duration: 300 }}>
  <h1>HandWashing App</h1>

  <Timer on:end={timerEnds} />

  <HowTo />

  <h3>
    <a href={imgHref}>Picture Source</a>
    <a href={soundHref}>Sound Source</a>
  </h3>

  <audio bind:this={audio}>
    <source src={soundSrc} />
  </audio>

</div>
