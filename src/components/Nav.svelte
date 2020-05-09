<script>
  export let segment;
  
  let open = false
  let fade = false

  function toggleMenu() { 
    open = !open 
    fade = !fade
  }
</script>

<style>
	nav {	
    height: 8vh;
    background: #5b78c7;
    position: relative;
  }
  
  .menu-links {
    display: flex;
    list-style: none;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
  }
  .menu-links li {
    opacity: 1;
  }
  .menu-links li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
  @media (max-width: 768px) {
     .line {
      width: 30px;
      height: 3px;
      background: white;
      margin: 5px;
    }
    .burger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 50%;
      transform: translate(-5%, -50%);
      z-index: 15;
    }
    .menu-links {
      position: absolute;
      background: #5b78c7;
      height: 100vh;
      width: 100%;
      flex-direction: column;
      clip-path: circle(100px at 90% -15%);
      -webkit-clip-path: circle(100px at 90% -15%);
      transition: all 0.5s ease-out;
      pointer-events: none;
      z-index: 10;
    }
    .menu-links.open {
      clip-path: circle(1000px at 90% -15%);
      -webkit-clip-path: circle(1000px at 90% -15%);
      pointer-events: all;
    }
    
    .menu-links li {
      opacity: 0;
      /* opacity: 1; */
      transition: all 0.5s ease 0.1s;
    }
    .menu-links li a {
      font-size: 25px;
    }
    /* .menu-links li:nth-child(1) {
      transition: all 0.5s ease 0.1s;
    }
    .menu-links li:nth-child(2) {
      transition: all 0.5s ease 0.2s;
    }
    .menu-links li:nth-child(3) {
      transition: all 0.5s ease 0.3s;
    } */
    li.fade {
      opacity: 1;
    }
  }
</style>

<nav>
  <div class="burger" on:click={toggleMenu}>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
	<ul class="menu-links" class:open>
		<li class:fade on:click={toggleMenu}><a aria-current='{segment === "demo1" ? "page" : undefined}' href='demo1'>Demo 1</a></li>
		<li class:fade on:click={toggleMenu}><a aria-current='{segment === "demo2" ? "page" : undefined}' href='demo2'>Demo 2</a></li>
		<li class:fade on:click={toggleMenu}><a aria-current='{segment === "Covid19Tracker" ? "page" : undefined}' href='Covid19Tracker'>Covid19Tracker</a></li>		
		<li class:fade on:click={toggleMenu}><a aria-current='{segment === "MarsWeather" ? "page" : undefined}' href='MarsWeather'>MarsWeather</a></li>		
		<li class:fade on:click={toggleMenu}><a aria-current='{segment === "Estimator" ? "page" : undefined}' href='Estimator'>Estimator</a></li>		
		<li class:fade on:click={toggleMenu}><a aria-current='{segment === "demo6" ? "page" : undefined}' href='demo6'>Demo 6</a></li>		
		<li class:fade on:click={toggleMenu}><a aria-current='{segment === "demo7" ? "page" : undefined}' href='demo7'>Demo 7</a></li>		
		<li class:fade on:click={toggleMenu}><a aria-current='{segment === "HandWash" ? "page" : undefined}' href='HandWash'>HandWash</a></li>		
	</ul>
</nav>
