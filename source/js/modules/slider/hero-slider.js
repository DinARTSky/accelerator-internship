const initHeroSlider = () => {

  const heroSlider = document.querySelector('.hero__slider');
  const heroPagination = document.querySelector('.hero__pagination');

  if (heroSlider) {
    // eslint-disable-next-line
    new Swiper(heroSlider, {
      modules: [Navigation, Pagination],
      // If we need pagination
      pagination: {
        el: heroPagination,
      },
    });
  }
};

export { initHeroSlider };
