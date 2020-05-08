<script>
  import ProgressBar from "./ProgressBar.svelte";
</script>

<style>
  .container {
    flex-direction: column;
    width: 50%;
    margin: auto;
    /* text-align: center; */
    align-items: center;
  }
  .start {   
    padding: 5px 0;
    width: 200px;
    margin: 10px auto;
    border-radius: 6px;
    outline: none;
    border: 1px solid;
  }
  @media (max-width: 575px) {
    h2 {
      font-size: 20px;
    }   
  }
  @media (max-width: 400px) {
    .start {
      width: 100%;
    }
  }
</style>

<div class="container">
  <p>Timer</p>
  <h2>Seconds Left:</h2>
  <ProgressBar />
  <button class="start">Start</button>
</div>
