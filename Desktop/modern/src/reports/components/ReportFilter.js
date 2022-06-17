import React, { useState } from 'react';
import {
  FormControl, InputLabel, Select, MenuItem, Button, TextField, Typography, makeStyles,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useTranslation } from '../../common/components/LocalizationProvider';
import dimensions from '../../common/theme/dimensions';

export const useFilterStyles = makeStyles((theme) => ({
  filter: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    padding: theme.spacing(3, 2, 2),
  },
  item: {
    flex: `1 1 ${dimensions.filterFormWidth}`,
  },
  buttons: {
    display: 'flex',
    gap: theme.spacing(1),
    flex: `1 1 ${dimensions.filterFormWidth}`,
  },
  button: {
    flexGrow: 1,
  },
}));

const ReportFilter = ({
  children, handleSubmit, showOnly, ignoreDevice,
}) => {
  const classes = useFilterStyles();
  const t = useTranslation();

  const devices = useSelector((state) => state.devices.items);
  const selectedDeviceId = useSelector((state) => state.devices.selectedId);

  const [deviceId, setDeviceId] = useState(selectedDeviceId);
  const [period, setPeriod] = useState('today');
  const [from, setFrom] = useState(moment().subtract(1, 'hour'));
  const [to, setTo] = useState(moment());

  const handleClick = (mail, json) => {
    let selectedFrom;
    let selectedTo;
    switch (period) {
      case 'today':
        selectedFrom = moment().startOf('day');
        selectedTo = moment().endOf('day');
        break;
      case 'yesterday':
        selectedFrom = moment().subtract(1, 'day').startOf('day');
        selectedTo = moment().subtract(1, 'day').endOf('day');
        break;
      case 'thisWeek':
        selectedFrom = moment().startOf('week');
        selectedTo = moment().endOf('week');
        break;
      case 'previousWeek':
        selectedFrom = moment().subtract(1, 'week').startOf('week');
        selectedTo = moment().subtract(1, 'week').endOf('week');
        break;
      case 'thisMonth':
        selectedFrom = moment().startOf('month');
        selectedTo = moment().endOf('month');
        break;
      case 'previousMonth':
        selectedFrom = moment().subtract(1, 'month').startOf('month');
        selectedTo = moment().subtract(1, 'month').endOf('month');
        break;
      default:
        selectedFrom = from;
        selectedTo = to;
        break;
    }

    const accept = json ? 'application/json' : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    handleSubmit(
      deviceId,
      selectedFrom.toISOString(),
      selectedTo.toISOString(),
      mail,
      { Accept: accept },
    );
  };

  return (
    <div className={classes.filter}>
      {!ignoreDevice && (
        <div className={classes.item}>
          <FormControl variant="filled" fullWidth>
            <InputLabel>{t('reportDevice')}</InputLabel>
            <Select value={deviceId || ''} onChange={(e) => setDeviceId(e.target.value)}>
              {Object.values(devices).map((device) => (
                <MenuItem key={device.id} value={device.id}>{device.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}
      <div className={classes.item}>
        <FormControl variant="filled" fullWidth>
          <InputLabel>{t('reportPeriod')}</InputLabel>
          <Select value={period} onChange={(e) => setPeriod(e.target.value)}>
            <MenuItem value="today">{t('reportToday')}</MenuItem>
            <MenuItem value="yesterday">{t('reportYesterday')}</MenuItem>
            <MenuItem value="thisWeek">{t('reportThisWeek')}</MenuItem>
            <MenuItem value="previousWeek">{t('reportPreviousWeek')}</MenuItem>
            <MenuItem value="thisMonth">{t('reportThisMonth')}</MenuItem>
            <MenuItem value="previousMonth">{t('reportPreviousMonth')}</MenuItem>
            <MenuItem value="custom">{t('reportCustom')}</MenuItem>
          </Select>
        </FormControl>
      </div>
      {period === 'custom' && (
        <div className={classes.item}>
          <TextField
            variant="filled"
            label={t('reportFrom')}
            type="datetime-local"
            value={from.format(moment.HTML5_FMT.DATETIME_LOCAL)}
            onChange={(e) => setFrom(moment(e.target.value, moment.HTML5_FMT.DATETIME_LOCAL))}
            fullWidth
          />
        </div>
      )}
      {period === 'custom' && (
        <div className={classes.item}>
          <TextField
            variant="filled"
            label={t('reportTo')}
            type="datetime-local"
            value={to.format(moment.HTML5_FMT.DATETIME_LOCAL)}
            onChange={(e) => setTo(moment(e.target.value, moment.HTML5_FMT.DATETIME_LOCAL))}
            fullWidth
          />
        </div>
      )}
      {children}
      <div className={classes.buttons}>
        <Button
          onClick={() => handleClick(false, true)}
          variant="outlined"
          color="secondary"
          className={classes.button}
          disabled={!ignoreDevice && !deviceId}
        >
          {t('reportShow')}
        </Button>
        {!showOnly && (
          <Button
            onClick={() => handleClick(false, false)}
            variant="outlined"
            color="secondary"
            className={classes.button}
            disabled={!ignoreDevice && !deviceId}
          >
            {t('reportExport')}
          </Button>
        )}
        {!showOnly && (
          <Button
            onClick={() => handleClick(true, false)}
            variant="outlined"
            color="secondary"
            className={classes.button}
            disabled={!ignoreDevice && !deviceId}
          >
            <Typography variant="button" noWrap>{t('reportEmail')}</Typography>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ReportFilter;
