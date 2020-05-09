<script>
  import { createEventDispatcher } from "svelte";
  import ProgressBar from "./ProgressBar.svelte";

  const totalSeconds = 5;
  let isRunning = false;
  let secondsLeft = totalSeconds;
  let progress

  const dispatch = createEventDispatcher();

  $: progress = ((totalSeconds - secondsLeft) / totalSeconds) * 100;

  function startTimer() {
    isRunning = true;
    let timer = setInterval(() => {
      secondsLeft -= 1;
      if (secondsLeft <= 0 && progress == 100) {
        clearInterval(timer);
        isRunning = false;        
        secondsLeft = totalSeconds;
        dispatch("end");
      }
    }, 1000);
  }
</script>

<style>
  .container {
    flex-direction: column;
    width: 50%;
    margin: 1rem auto;
    align-items: center;
  }
  .start {
    padding: 0.5rem 0;
    margin-left: 0;
    width: 500px;
    margin: 10px auto;
    border-radius: 6px;
    outline: none;
    border: 1px solid;
    cursor: pointer;
    font-size: 1.2rem;
  }
  .start[disabled] {
    background: rgb(194, 194, 194);
    cursor: not-allowed;
  }
  h2 {
    text-align-last: left;
  }
  @media (max-width: 575px) {
    h2 {
      font-size: 20px;
    }
    .start {
      width: 100%;
    }
    .btn-container {
      width: 90vw;
    }
  }
</style>

<div class="container">
  <h2>Seconds Left: {secondsLeft}</h2>
  <h1>{ progress }</h1>
  <ProgressBar {progress} />
  <div class="btn-container">
    <button disabled={isRunning} class="start" on:click={startTimer}>
      Start
    </button>
  </div>
</div>
