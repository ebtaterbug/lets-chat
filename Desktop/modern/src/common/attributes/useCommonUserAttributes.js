import { useMemo } from 'react';

export default (t) => useMemo(() => ({
  notificationTokens: {
    name: t('attributeNotificationTokens'),
    type: 'string',
  },
  /* 'web.liveRouteLength': {
    name: t('attributeWebLiveRouteLength'),
    type: 'number',
  },
  'web.selectZoom': {
    name: t('attributeWebSelectZoom'),
    type: 'number',
  },
  'web.maxZoom': {
    name: t('attributeWebMaxZoom'),
    type: 'number',
  },
  'ui.disableEvents': {
    name: t('attributeUiDisableEvents'),
    type: 'boolean',
  },
  'ui.disableVehicleFetures': {
    name: t('attributeUiDisableVehicleFetures'),
    type: 'boolean',
  },
  'ui.disableDrivers': {
    name: t('attributeUiDisableDrivers'),
    type: 'boolean',
  },
  'ui.disableComputedAttributes': {
    name: t('attributeUiDisableComputedAttributes'),
    type: 'boolean',
  },
  'ui.disableCalendars': {
    name: t('attributeUiDisableCalendars'),
    type: 'boolean',
  },
  'ui.disableMaintenance': {
    name: t('attributeUiDisableMaintenance'),
    type: 'boolean',
  },
  'ui.hidePositionAttributes': {
    name: t('attributeUiHidePositionAttributes'),
    type: 'string',
  }, */
}), [t]);
