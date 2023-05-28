import CONFIG from '../../global/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="container">
    <div class="detail-restaurant">
      <div class="list-card">
        <div class="card-img">
          <img
            src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
            alt="${restaurant.name}"
            class="w-100-auto"
            tabindex="0">
        </div>
        <div class="list-content">
          <div class="list-cityrate">
            <div href="#" class="card-cityrate">
              <i class="fa-sharp fa-solid fa-location-dot"></i>
              <label class="meta-info" aria-label="${restaurant.city}" tabindex="0">${restaurant.address}, ${restaurant.city}</label>
            </div>
            <div class="card-cityrate">
              <i class="fa-solid fa-list"></i>
              <label class="meta-info" aria-label="${restaurant.categories.map((category) => category.name)}" tabindex="0">${restaurant.categories.map((category) => category.name)}</label>
            </div >
            <div class="card-cityrate">
              <i class="fa-solid fa-star"></i>
              <label class="meta-info" aria-label="Rating ${restaurant.rating}" tabindex="0">${restaurant.rating}</label>
            </div>
          </div >
          <h2 class="card-title" tabindex="0">${restaurant.name}</h2>
          <p class="card-text" tabindex="0">
          ${restaurant.description}
          </p>
          <div class="menus">
            <div class="menus-title">
              <h2>Our Menu</h3>
            </div>
            <div class="menu foods">
              <h3>Foods</h3>
              <ul>
                ${restaurant.menus.foods.map((menu) => `<li><i class="fa-sharp fa-solid fa-circle-check"></i><span>${menu.name}</li>`).join('')}</span></li>
              </ul>
            </div>
            <div class="menu drinks">
              <h3>Drinks</h3>
              <ul>
              ${restaurant.menus.drinks.map((menu) => `<li><i class="fa-sharp fa-solid fa-circle-check"></i><span>${menu.name}</li>`).join('')}</span></li>
              </ul>
            </div>
          </div>
          <div class="reviews">
            <div class="review-heading">
              <h2>Customer reviews</h2>
            </div>
            <div class="container-card-review">
              ${restaurant.customerReviews.map((review) => `
                <div class="review-card">
                  <div class="review-card-top">
                    <div class="profile">
                      <div class="profile-img">
                        <img src="../images/avatar-768x768.png" alt="">
                      </div>
                      <div class="name-date">
                        <strong>${review.name}</strong>
                        <span>${review.date}</span>
                      </div>
                    </div>
                  </div>
                  <div class="review-card-bottom">
                    <p>${review.review}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div >
      </div >
    </div >
  </div >
  `;

const createRestaurantItemTemplate = (restaurant) => `
  <li>
  <div class="list-card">
    <div class="card-img">
      <img
        src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
        alt="${restaurant.name}"
        class="w-100"
        tabindex="0"
      >
    </div>
    <div class="list-content">
      <div class="list-cityrate">
        <div href="#" class="card-cityrate">
          <i class="fa-solid fa-star"></i>
          <label class="meta-info" aria-label="Rating ${restaurant.rating}" tabindex="0">${restaurant.rating}</label>
        </div>
        <div href="#" class="card-cityrate">
          <i class="fa-sharp fa-solid fa-location-dot"></i>
          <label class="meta-info" aria-label="${restaurant.city}" tabindex="0">${restaurant.city}</label>
        </div>
      </div>
      <h3 class="card-title" tabindex="0">
        <a class="res-name" href="/#/detail/${restaurant.id}">${restaurant.name}</a>
      </h3>
      <p class="card-text" tabindex="0">
        ${restaurant.description}
      </p>
    </div>
  </div>
  </ >
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createDislikeButtonTemplate = () => `
  <button aria-label="dislike this restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createDislikeButtonTemplate,
};
