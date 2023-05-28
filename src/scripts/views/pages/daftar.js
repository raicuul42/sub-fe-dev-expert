import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Daftar = {
  async render() {
    return `
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-contents">
          <p class="hero-info">Hanya Disini</p>
          <h2 class="hero-title" tabindex="0">Rumah Makan <span>Sehat</span></h2>
          <p class="hero-desc" tabindex="0">Siap membantu Anda untuk menemukan rumah makan sehat.</p>
        </div>
      </div>
    </section>

    <section id="main-content" class="explore-restaurant">
      <div class="container">
        <h2 class="explore-restaurant-title" tabindex="0">Rumah Makan <span>Sehat</span></h2>
        <ul class="list-restaurant"></ul>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector('.list-restaurant');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Daftar;
