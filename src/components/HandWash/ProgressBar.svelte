<style>
  .progress-container {
    width: 500px;
    margin: 20px 0;
    border: 1px solid rgb(194, 194, 194);
  }
  .progress-bar {
    /* width: 20%; */
    height: 30px;
    background: rgb(77, 199, 55);
  }
  @media (max-width: 575px) {
    .progress-container {
      width: 90vw;
    }
  }
</style>

<div class="container">
  <div class="progress-container">
    <div class="progress-bar" style="width: 20%">
      <span class="sr-only">%</span>
    </div>
  </div>
</div>