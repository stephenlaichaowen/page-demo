<script>
  import Timer from '../components/HandWash/Timer.svelte'
  import HowTo from '../components/HandWash/HowTo.svelte'
  
  let imgHref = 'https://www.who.int/gpsc/clean_hands_protection/en/'
  let soundHref = 'https://freesound.org/people/metrostock99/sounds/345086'
  let soundSrc = 'handwashing/sound.wav'
  let audio

  function timerEnds(e) {
    // alert(`timer ends !`)
    audio.play()
  }
</script>

<style>
  h1 {
    margin-top: 2rem;
  }
  h1, h3 {
    text-align: center;
  }
  @media (max-width: 575px) {
    h1 {
      font-size: 28px;
    }
  }
</style>

<h1>HandWashing App</h1>

<Timer on:end={timerEnds} />

<HowTo  />

<h3>
  <a href={imgHref}>Picture Source</a>
  <a href={soundHref}>Sound Source</a>
</h3>

<audio bind:this={audio}>
  <source src={soundSrc}>
</audio>