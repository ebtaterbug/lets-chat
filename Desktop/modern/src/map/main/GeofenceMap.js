import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { map } from '../core/Map';
import { geofenceToFeature } from '../core/mapUtil';

const GeofenceMap = () => {
  const id = 'geofences';

  const geofences = useSelector((state) => state.geofences.items);

  useEffect(() => {
    map.addSource(id, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [],
      },
    });
    map.addLayer({
      source: id,
      id: 'geofences-fill',
      type: 'fill',
      filter: [
        'all',
        ['==', '$type', 'Polygon'],
      ],
      paint: {
        'fill-color': '#3bb2d0',
        'fill-outline-color': '#3bb2d0',
        'fill-opacity': 0.1,
      },
    });
    map.addLayer({
      source: id,
      id: 'geofences-line',
      type: 'line',
      paint: {
        'line-color': '#3bb2d0',
        'line-width': 2,
      },
    });
    map.addLayer({
      source: id,
      id: 'geofences-title',
      type: 'symbol',
      layout: {
        'text-field': '{name}',
        'text-font': ['Roboto Regular'],
        'text-size': 12,
      },
      paint: {
        'text-halo-color': 'white',
        'text-halo-width': 1,
      },
    });

    return () => {
      if (map.getLayer('geofences-fill')) {
        map.removeLayer('geofences-fill');
      }
      if (map.getLayer('geofences-line')) {
        map.removeLayer('geofences-line');
      }
      if (map.getLayer('geofences-title')) {
        map.removeLayer('geofences-title');
      }
      if (map.getSource(id)) {
        map.removeSource(id);
      }
    };
  }, []);

  useEffect(() => {
    map.getSource(id).setData({
      type: 'FeatureCollection',
      features: Object.values(geofences).map(geofenceToFeature),
    });
  }, [geofences]);

  return null;
};

export default GeofenceMap;
