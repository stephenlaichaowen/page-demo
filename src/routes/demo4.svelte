<script>
  let active = false  
  let toggle = false
  let fade = false
  
  function toggleMenu() {
    // toggle menu
    active = !active    

    // toggle burger animation 
    toggle = !toggle
    
    // fade menu list
    fade = !fade
  }
</script>

<style>
  nav {
    display: flex;
    border: 1px solid;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    background: #5d4954;
    position: relative;
  }
  .logo {
    color: rgb(266, 266, 266);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 20px;
  }
  .nav-links {
    display: flex;
    /* background: red; */
    justify-content: space-around;
    width: 40%;
  }
  .nav-links li {
    list-style: none;
  }
  .nav-links a {
    color: rgb(266, 266, 266);
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 14px;
  }
  .burger {
    display: none;
  }
  .burger div {
    width: 25px;
    height: 3px;
    background: rgb(266, 266, 266);
    margin: 5px;
    transition: all 0.3s ease;
  }  
  .nav-links.active {
    transform: translateX(0%);
  }
  /* .fade li {
    opacity: 1;    
  } */
  .toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  .toggle .line2 {
    opacity: 0;
  }
  .toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @media (max-width: 768px) {
    .nav-links {
      position: absolute;
      right: -1vh;
      height: 92vh;
      top: 7vh;
      background: #5d4954;
      flex-direction: column;
      align-items: center;
      width: 50%;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
    }
    /* .nav-links li {
      opacity: 0;
      transition: all 1s ease;
    } */
    .burger {
      display: block;
      cursor: pointer;
    }    
  }
</style>

<nav>
  <div class="logo">
    <h4>The Nav</h4>
  </div>
  <ul class="nav-links" class:active class:fade>
    <li><a href=".">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#work">Work</a></li>
    <li><a href="#projects">Projects</a></li>
  </ul>
  <div class="burger" on:click={toggleMenu} class:toggle>
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
</nav>