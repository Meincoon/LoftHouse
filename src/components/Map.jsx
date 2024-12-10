import { useEffect, useState } from 'react';

function Map() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadYandexMaps = () => {
      if (window.ymaps) {
        setIsLoaded(true);
        window.ymaps.ready(initMap);
      } else {
        console.error('Yandex Maps API not loaded');
      }
    };

    if (!isLoaded) {
      loadYandexMaps();
    }

    function initMap() {
      const mapContainer = document.getElementById('map');
      if (!mapContainer || mapContainer.children.length > 0) return;

      const map = new window.ymaps.Map('map', {
        center: [59.943543, 30.338928],
        zoom: 16,
      });

      const myPlacemark = new window.ymaps.Placemark(
        [59.943543, 30.338928],
        {
          balloonContent: `
            <div class="balloon">
              <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
              <div class="balloon__contacts">
                <a href="tel:+78121234567">+8 (812) 123-45-67</a>
              </div>
            </div>
          `,
        },
        {
          iconLayout: 'default#image',
          iconImageHref: '/img/map/location-pin.svg',
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -40],
        }
      );

      map.controls.remove('geolocationControl'); 
      map.controls.remove('searchControl');
      map.controls.remove('trafficControl');
      map.controls.remove('typeSelector');
      map.controls.remove('rulerControl');
      map.behaviors.disable(['scrollZoom']);

      map.geoObjects.add(myPlacemark);
    }

    return () => {
      const mapContainer = document.getElementById('map');
      if (mapContainer && mapContainer.children.length > 0) {
        mapContainer.innerHTML = '';
      }
    };
  }, [isLoaded]);

  return (
    <section className="section-map none1">
      <div className="container">
        <div className="section-map__title">
          <h2 className="title-2">Район на карте</h2>
        </div>
        <div className="section-map__map">
          <div className="map" id="map" style={{ height: '400px', width: '100%' }}></div>
        </div>
      </div>
    </section>
  );
}

export default Map;
