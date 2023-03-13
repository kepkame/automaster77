export default () => {
  function init() {
    const routeBtn = document.querySelector('.route');
    const mediaWidthMobile = 430;
    const mediaWidthDesktop = 767;

    const mapAddress = [55.86592106367691, 37.48328331906127];
    const mapCenterMob = [55.858579, 37.483639];
    const mapCenterDesktop = [55.866145, 37.48640];
    const mapZoomMob = 13;
    const mapZoomDesktop = 15;

    // Center
    let mapCenter = mapCenterMob;
    if (window.innerWidth >= mediaWidthDesktop) {
      mapCenter = mapCenterDesktop;
    }

    // Zoom
    let mapZoom = mapZoomMob;
    if (window.innerWidth >= mediaWidthDesktop) {
      mapZoom = mapZoomDesktop;
    }

    // Change map size
    function changeMapSize(map, isWorkZoom = true, onlyMobile = false) {
      if (window.innerWidth < mediaWidthDesktop) {
        map.setCenter(mapCenterMob);
        if (isWorkZoom) map.setZoom(mapZoomMob);
      } else if (window.innerWidth >= mediaWidthDesktop && !onlyMobile) {
        map.setCenter(mapCenterDesktop);
        if (isWorkZoom) map.setZoom(mapZoomDesktop);
      }
    }

    // Create a map
    /* eslint-disable-next-line */
    const myMap = new ymaps.Map('map', {
      center: mapCenter,
      zoom: mapZoom,
      controls: [
        'fullscreenControl',
        'geolocationControl',
        'trafficControl',
        'zoomControl',
      ],
      behaviors: ['default', 'scrollZoom'],
    });

    /* eslint-disable-next-line */
    const placemark = new ymaps.Placemark(mapAddress, {
      balloonContent: `

      <div class="balloon">
        <div class="balloon__wrapper">
          <h3 class="baloon__title">
            <a href="https://yandex.ru/maps/org/tsentr_udaleniya_vmyatin_avtomaster77/122631074075/?from=mapframe"
              target="_blank">Центр удаления вмятин Автомастер77</a>
          </h3>

          <p class="baloon__categories">Автосервис, автотехцентр, детейлинг, кузовной ремонт</p>

          <ul class="baloon__contacts-view">
            <li class="baloon__contacts-item baloon__contacts-item--address">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1a9.002 9.002 0 0 0-6.366 15.362c1.63 1.63 5.466 3.988 5.693 6.465.034.37.303.673.673.673.37 0 .64-.303.673-.673.227-2.477 4.06-4.831 5.689-6.46A9.002 9.002 0 0 0 12 1zm0 12.079a3.079 3.079 0 1 1 0-6.158 3.079 3.079 0 0 1 0 6.158z" fill="#CCCCCC"></path></svg>
              Россия, Москва, Беломорская улица, 40, стр. 2
            </li>
            <li class="baloon__contacts-item baloon__contacts-item--phone">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.186 19.742c1.15-1.15.883-2.424.404-2.707-.336-.198-4.749-2.684-4.749-2.684-.344-.216-.686-.106-.893.142l-.005-.004-1.626 1.625a.674.674 0 0 1-.824.1 14.052 14.052 0 0 1-2.632-2.075 14.054 14.054 0 0 1-2.074-2.632.674.674 0 0 1 .1-.824L9.51 9.057l-.004-.005c.243-.203.361-.544.143-.893 0 0-2.487-4.413-2.685-4.75-.283-.478-1.556-.745-2.707.405-2.566 2.568-1.081 8.207 3.32 12.608 4.398 4.399 10.04 5.887 12.608 3.32z" fill="#CCCCCC"></path></svg>
              <a href="tel:+79851118828">+7(985)111-88-28</a>
            </li>
            <li class="baloon__contacts-item baloon__contacts-item--email">
              <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.94 1A5.057 5.057 0 0 1 20 6.05v7.9c0 2.79-2.27 5.05-5.06 5.05H5.06A5.057 5.057 0 0 1 0 13.95v-7.9A5.05 5.05 0 0 1 5.06 1h9.88Zm1.59 6.54.08-.08a.773.773 0 0 0-.01-1 .84.84 0 0 0-.53-.26.76.76 0 0 0-.56.2L11 10a1.566 1.566 0 0 1-2 0L4.5 6.4a.76.76 0 0 0-1 .07c-.27.27-.3.7-.07 1l.13.13 4.55 3.55a3.143 3.143 0 0 0 3.91 0l4.51-3.61Z" fill="#CCCCCC"/></svg>
              <a href="mailto:info@automaster77.com">info@automaster77.com</a>
            </li>
          </ul>

          <ul class="baloon__stops">
            <li class="baloon__stop">
              <span class="baloon__stop-icon"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" fill="#3aa63a"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 15.502a1 1 0 1 1-2 0v-7.1c0-1.005 1.316-1.382 1.848-.53L12 12.115l2.652-4.243c.532-.852 1.848-.475 1.848.53v7.1a1 1 0 1 1-2 0v-3.613l-1.652 2.643a1 1 0 0 1-1.696 0L9.5 11.889v3.613z" fill="#fff"></path></svg></span>
              <span class="baloon__metro-name">Беломорская</span>
              <a href="https://yandex.ru/maps/213/moscow/?from=mapframe&ll=37.480056%2C55.865990&mode=routes&rtext=55.865397%2C37.475993~55.866297%2C37.482935&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3D3335468575~&z=17" target="_blank">
                <span class="icon"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" fill="#196dff"></path><path d="M14.836 15.133a.66.66 0 0 1 .11.217l1.4 4.734a.716.716 0 0 1-.516.889.76.76 0 0 1-.909-.447l-1.672-4.413-2.815-2.707a1.013 1.013 0 0 1-.29-.93l.6-3.292-1.352.385-1.191 2.664a.635.635 0 0 1-.82.32.593.593 0 0 1-.34-.766L8.242 8.78a.626.626 0 0 1 .308-.332l.077-.037 3.008-1.478.021-.008.015-.005a.935.935 0 0 1 .6-.089c.269.05.5.199.615.425.114.226.154.641.154.641.046.256.062.508.078.76a12.356 12.356 0 0 1 .039 1.42c-.021.72-.07 1.434-.17 2.141l-.053.418 1.833 2.407.068.091z" fill="#196dff"></path><path d="M14.12 9.253l2.643 2.276c.27.206.316.583.103.843a.644.644 0 0 1-.858.114l-2.128-1.482.023-.129.028-.158.074-.407.026-.145.025-.142.017-.23.025-.29.01-.12.011-.13z" fill="#196dff"></path><path d="M10.164 14.399c.209.2.441.405.674.609.371.326.751.64 1.085.895-.142.287-.379.76-.379.76l-2.539 3.992a.768.768 0 0 1-1.031.24.707.707 0 0 1-.278-.943l2.117-3.99.029-.277c.023-.225.046-.451.077-.675l.11-.736.065.06.07.065z" fill="#196dff"></path></svg></span>
                <span class="balloon__distance">550 м</span>
              </a>
            </li>
            <li class="baloon__stop">
              <span class="baloon__stop-icon"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" fill="#3aa63a"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 15.502a1 1 0 1 1-2 0v-7.1c0-1.005 1.316-1.382 1.848-.53L12 12.115l2.652-4.243c.532-.852 1.848-.475 1.848.53v7.1a1 1 0 1 1-2 0v-3.613l-1.652 2.643a1 1 0 0 1-1.696 0L9.5 11.889v3.613z" fill="#fff"></path></svg></span>
              <span class="baloon__metro-name">Ховрино</span>
              <a href="https://yandex.ru/maps/213/moscow/?from=mapframe&ll=37.486685%2C55.872309&mode=routes&rtext=55.878273%2C37.480618~55.866297%2C37.482935&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3D2135150818~&z=15.46" target="_blank">
                <span class="icon"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" fill="#196dff"></path><path d="M14.836 15.133a.66.66 0 0 1 .11.217l1.4 4.734a.716.716 0 0 1-.516.889.76.76 0 0 1-.909-.447l-1.672-4.413-2.815-2.707a1.013 1.013 0 0 1-.29-.93l.6-3.292-1.352.385-1.191 2.664a.635.635 0 0 1-.82.32.593.593 0 0 1-.34-.766L8.242 8.78a.626.626 0 0 1 .308-.332l.077-.037 3.008-1.478.021-.008.015-.005a.935.935 0 0 1 .6-.089c.269.05.5.199.615.425.114.226.154.641.154.641.046.256.062.508.078.76a12.356 12.356 0 0 1 .039 1.42c-.021.72-.07 1.434-.17 2.141l-.053.418 1.833 2.407.068.091z" fill="#196dff"></path><path d="M14.12 9.253l2.643 2.276c.27.206.316.583.103.843a.644.644 0 0 1-.858.114l-2.128-1.482.023-.129.028-.158.074-.407.026-.145.025-.142.017-.23.025-.29.01-.12.011-.13z" fill="#196dff"></path><path d="M10.164 14.399c.209.2.441.405.674.609.371.326.751.64 1.085.895-.142.287-.379.76-.379.76l-2.539 3.992a.768.768 0 0 1-1.031.24.707.707 0 0 1-.278-.943l2.117-3.99.029-.277c.023-.225.046-.451.077-.675l.11-.736.065.06.07.065z" fill="#196dff"></path></svg></span>
                <span class="balloon__distance">1,35 км</span>
              </a>
            </li>
          </ul>

          <div class="balloon__business-buttons">
            <a class="balloon__button balloon__button--secondary" href="https://yandex.ru/maps/213/moscow/?from=mapframe&ll=37.492595%2C55.867375&mode=routes&rtext=~55.866607%2C37.482651&rtt=auto&ruri=~&z=14" target="_blank">Как добраться</a>
            <a class="balloon__button" href="https://yandex.ru/maps/org/tsentr_udaleniya_vmyatin_avtomaster77/122631074075/?from=mapframe" target="_blank">Об организации</a>
          </div>

          <div class="balloon__taxy">
            <img aria-hidden="true"
                src="//yastatic.net/s3/front-maps-static/maps-front-maps/static/v30/icons/core/yndx-taxi-16.svg"
                class="balloon__taxy-img"
                width="16px" height="16px">
            <a class="balloon__taxy-link"
              href="//taxi.yandex.ru/order?gfrom=,&amp;gto=55.86579,37.483386&amp;tariff=&amp;lang=ru"
              target="_blank">Вызвать такси</a>
          </div>
        </div>
      </div>

      `,
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/images/placeholder.png',
      iconImageSize: [46, 60],
      iconImageOffset: [-23, -60],
    });

    myMap.geoObjects.add(placemark);
    myMap.options.set({ balloonPanelMaxMapArea: 250125 });

    myMap.geoObjects.events.add('balloonopen', () => {
      if (window.innerWidth < mediaWidthMobile) routeBtn.style.display = 'none';
    });

    myMap.geoObjects.events.add('balloonclose', () => {
      if (window.innerWidth < mediaWidthMobile) routeBtn.removeAttribute('style');
      changeMapSize(myMap, true, true); // Center of the map
    });

    // Event when the window is resized
    window.addEventListener('resize', () => {
      // Balloon display
      if (window.innerWidth >= mediaWidthMobile) {
        routeBtn.removeAttribute('style');
        myMap.setCenter(mapCenter);
      } else if (window.innerWidth < mediaWidthMobile
                 && document.querySelector('#map ymaps[class$="-panel-pane"]')
                 && document.querySelector('#map ymaps[class$="-panel-pane"]').hasChildNodes()) {
        routeBtn.style.display = 'none';
      }

      changeMapSize(myMap); // Center of the map
    });
  }

  /* eslint-disable-next-line */
  ymaps.ready(init);
};
