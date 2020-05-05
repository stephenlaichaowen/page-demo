<script>
  let open = false
  let fade = false
  
  const links = document.querySelectorAll(".nav-links li");

  function toggleMenu() {
    open = !open
    fade = !fade
  }
</script>


<div class="body">
  <nav>
    <div class="hamburger" on:click={toggleMenu}>
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
    <ul class="nav-links" class:open>
      <li class:fade>
        <a href="#about">About</a>
      </li>
      <li class:fade>
        <a href="#contact">Contact</a>
      </li>
      <li class:fade>
        <a href="#projects">Projects</a>
      </li>
    </ul>
  </nav>
  <section class="landing">
    <img src="./circles.svg" alt="dots" />
    <h1>Dot</h1>
  </section>
</div>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .body {
    font-family: sans-serif;
  }
  nav {
    height: 10vh;
    background: #5b78c7;
  }
  .nav-links {
    display: flex;
    list-style: none;
    width: 50%;
    /* background: lightcoral; */
    height: 100%;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
  }
  .nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
  .landing {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .landing h1 {
    margin: 100px;
    font-size: 50px;
    color: #ae5fce;
  }
  @media (max-width: 575px) {
    .line {
      width: 30px;
      height: 3px;
      background: white;
      margin: 5px;
    }
    nav {
      position: relative;
    }
    .hamburger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 50%;
      transform: translate(-5%, -50%);
      z-index: 2;
    }
    .nav-links {
      position: fixed;
      background: #5b78c7;
      height: 100vh;
      width: 100%;
      flex-direction: column;
      clip-path: circle(100px at 90% -15%);
      -webkit-clip-path: circle(100px at 90% -15%);
      transition: all 0.5s ease-out;
      pointer-events: none;
    }
    .nav-links.open {
      clip-path: circle(1000px at 90% -15%);
      -webkit-clip-path: circle(1000px at 90% -15%);
      pointer-events: all;
    }
    .landing {
      flex-direction: column;
    }
    .nav-links li {
      opacity: 0;
    }
    .nav-links li a {
      font-size: 25px;
    }
    .nav-links li:nth-child(1) {
      transition: all 0.5s ease 0.1s;
    }
    .nav-links li:nth-child(2) {
      transition: all 0.5s ease 0.2s;
    }
    .nav-links li:nth-child(3) {
      transition: all 0.5s ease 0.3s;
    }
    li.fade {
      opacity: 1;
    }
  }
</style>

