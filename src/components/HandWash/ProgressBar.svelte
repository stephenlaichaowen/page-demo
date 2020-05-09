<script>
  export let progress = 0
</script>

<style>
  .progress-container {
    width: 500px;
    margin: 20px 0;
    border: 1px solid rgb(194, 194, 194);
  }
  .progress-bar {
    /* width: 20%; */
    height: 40px;
    background: rgb(77, 199, 55);
    /* padding: 5px 0; */
  }
  @media (max-width: 575px) {
    .progress-container {
      width: 90vw;
    }
  }
</style>

<div class="wrapper">
  <div class="progress-container">
    <div class="progress-bar" style="width: {progress}%">
      <span class="sr-only">%{ progress }</span>
    </div>
  </div>
</div>