import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <section class="restaurant-detail"></section>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.detail(url.id);
    const restaurantContainer = document.querySelector('.restaurant-detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurants.id,
        pictureId: restaurants.pictureId,
        name: restaurants.name,
        description: restaurants.description,
        city: restaurants.city,
        rating: restaurants.rating,
      },
    });
  },
};

export default Detail;
