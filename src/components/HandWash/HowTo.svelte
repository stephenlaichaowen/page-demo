<script>
  let src = "handwashing/handwashing.gif";
  let alt = "handwashing picture";
</script>

<style>
  @media (max-width: 575px) {
    .img-container {
      width: 100%;
      /* border: 1px solid; */
      padding: 1rem;
    }
    img {
      width: 100%;
      /* object-fit: center; */
    }
  }
</style>

<div class="wrapper">
  <div class="img-container">
    <img {src} {alt} />
  </div>
</div>
