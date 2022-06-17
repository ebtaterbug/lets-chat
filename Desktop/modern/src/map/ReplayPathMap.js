import maplibregl from 'maplibre-gl';
import { useEffect } from 'react';
import { map } from './core/Map';

const ReplayPathMap = ({ positions }) => {
  const id = 'replay';

  useEffect(() => {
    map.addSource(id, {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [],
        },
      },
    });
    map.addLayer({
      source: id,
      id,
      type: 'line',
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#3bb2d0',
        'line-width': 2,
      },
    });

    return () => {
      if (map.getLayer(id)) {
        map.removeLayer(id);
      }
      if (map.getSource(id)) {
        map.removeSource(id);
      }
    };
  }, []);

  useEffect(() => {
    const coordinates = positions.map((item) => [item.longitude, item.latitude]);
    map.getSource(id).setData({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates,
      },
    });
    if (coordinates.length) {
      const bounds = coordinates.reduce((bounds, item) => bounds.extend(item), new maplibregl.LngLatBounds(coordinates[0], coordinates[0]));
      map.fitBounds(bounds, {
        padding: {
          top: 50, bottom: 250, left: 25, right: 25,
        },
      });
    }
  }, [positions]);

  return null;
};

export default ReplayPathMap;
