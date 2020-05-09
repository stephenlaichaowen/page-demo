<script>
  import { createEventDispatcher } from "svelte";
  import ProgressBar from "./ProgressBar.svelte";

  let totalSeconds 
  let secondsLeft
  let progress
  let inputNumber = 0
  let isRunning = false;
  
  $: totalSeconds = inputNumber
  $: secondsLeft = totalSeconds

  const dispatch = createEventDispatcher();

  $: progress = ((totalSeconds - secondsLeft) / totalSeconds) * 100;

  function startTimer() {
    isRunning = true;
    let timer = setInterval(() => {
      secondsLeft -= 1
      if (secondsLeft <= 0 && progress == 100) {
        clearInterval(timer);
        isRunning = false;        
        secondsLeft = totalSeconds
        dispatch("end");
      } 
    }, 1000);
  }
</script>

<style>
  .wrapper {
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
    /* border: 1px solid; */
    display: flex;
    width: 500px;
    flex-direction: column;
  }
  /* .title, .inputBox {
    flex: 1;
  } */
  /* .title {
    text-align: right;
    padding-right: 1rem;
  } */
  .inputBox {
    margin: 0.5rem 0;
    font-size: 18px;
    padding: 0.5rem;
  }
  @media (max-width: 575px) {
    h2 {
      font-size: 20px;
      width: 90vw;
    }
    .title, .inputBox {
      width: 100%;
    }
    .start {
      width: 100%;
    }
    .btn-container {
      width: 90vw;
    }
  }
</style>

<div class="wrapper">  
  <h2>
    <input disabled={isRunning} placeholder="Please enter seconds..." class="inputBox" type="number" min="0" bind:value={inputNumber}>
    <span class="title">Seconds Left : { secondsLeft }</span>
  </h2>
  <ProgressBar {progress} />
  <div class="btn-container">
    <button disabled={isRunning} class="start" on:click={startTimer}>
      Start
    </button>
  </div>
</div>
