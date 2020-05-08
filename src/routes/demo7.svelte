<main>
  <div class="banner">
    <img src="img/photo-bg.jpg" alt="photo" />
    <div class="author">
      <h1>Elena Morell</h1>
      <h3>Photographer</h3>
    </div>
  </div>
  <div class="story">
    <div class="story-description">
      <h3>My Story</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam recusandae sequi ipsam dolores? Quod sed velit necessitatibus nesciunt placeat, tempora eum. Laborum dolores ex ipsa exercitationem quibusdam repellat facilis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam recusandae sequi ipsam dolores? Quod sed velit necessitatibus nesciunt placeat, tempora eum. Laborum dolores ex ipsa exercitationem quibusdam repellat facilis?
      </p>
    </div>
    <div class="profile">
      <img src="img/photo-profile.jpg" alt="profile photo">
    </div>
    <div class="my-work">
      <div class="work-description">
        <h3>My Work</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam recusandae sequi ipsam dolores? Quod sed velit necessitatibus nesciunt placeat, tempora eum. Laborum dolores ex ipsa exercitationem quibusdam repellat facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam recusandae sequi ipsam dolores? Quod sed velit necessitatibus nesciunt placeat, tempora eum. Laborum dolores ex ipsa exercitationem quibusdam repellat facilis?
        </p>
      </div>
      <div class="work-gallery">
        <img src="img/photo-gallery-1.jpg" alt="gallery photo">
        <img src="img/photo-gallery-2.jpg" alt="gallery photo">
        <img src="img/photo-gallery-3.jpg" alt="gallery photo">
        <img src="img/photo-gallery-4.jpg" alt="gallery photo">
        <img src="img/photo-gallery-5.jpg" alt="gallery photo">
        <img src="img/photo-gallery-6.jpg" alt="gallery photo">
      </div>
    </div>
  </div>
</main>

<style>
  .banner {
    height: 50vh;
    width: 100%;
    position: relative;    
  }
  .banner img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
  .author {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
  .author h1 {
    font-size: 42px;
  }
  .author h3 {
    padding: 10px 0px;
    font-size: 32px;
  }
  .story,
  .my-work {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    padding: 80px 0px;
  }
  .story-description,
  .work-description {
    width: 50%;
  }
  .story-description h3,
  .work-description h3 {
    font-size: 36px;
    padding-bottom: 30px;
  }
  .story-description p,
  .work-description p {
    padding: 20px 0px;
    font-size: 20px;
  }
  .work-gallery {
    display: grid;
    grid-template-columns: repeat(3, 200px);
  }
  .work-gallery img {
    width: 100%;
  }
  .story,
  .my-work {
    flex-direction: column;
  }
  .story-description,
  .work-gallery {
    width: 100%;
  }
  .work-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .profile {
    padding-top: 30px;
    text-align: center;
  }
 
</style>
