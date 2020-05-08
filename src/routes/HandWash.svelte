<script>
  import Timer from '../components/HandWash/Timer.svelte'
  import HowTo from '../components/HandWash/HowTo.svelte'

  let imgSrc = 'https://www.who.int/gpsc/clean_hands_protection/en/'
  let soundSrc = 'https://freesound.org/people/metrostock99/sounds/345086'
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

<Timer />

<HowTo  />

<h3>
  <a href={imgSrc}>Picture Source</a>
  <a href={soundSrc}>Sound Source</a>
</h3>