import React from 'react';
import './style.css';
import { useData } from './useData';
import {
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  CandlestickSeries,
  OHLCTooltip,
  XAxis,
  YAxis,
  CrossHairCursor,
  withDeviceRatio,
  withSize,
} from 'react-financial-charts';
import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';

const MainChart = ({ dateTimeFormat = '%H:%M', height, ratio, width }) => {
  const { data: initialData, loaded } = useData();
  if (!loaded || !height || !ratio || !width) return null;

  const margin = { left: 50, right: 50, top: 50, bottom: 24 };
  const pricesDisplayFormat = format('.2f');
  const timeDisplayFormat = timeFormat(dateTimeFormat);

  const xScaleProvider =
    discontinuousTimeScaleProviderBuilder().inputDateAccessor((d) => d.date);

  const { data, xScale, xAccessor, displayXAccessor } =
    xScaleProvider(initialData);

  const max = xAccessor(data[data.length - 1]);
  const min = xAccessor(data[Math.max(0, data.length - 100)]);
  const xExtents = [min, max];

  return (
    <ChartCanvas
      height={height}
      ratio={ratio}
      width={width}
      margin={margin}
      seriesName={'Data'}
      data={data}
      xScale={xScale}
      xAccessor={xAccessor}
      displayXAccessor={displayXAccessor}
      xExtents={xExtents}
    >
      <Chart yExtents={(d) => [d.high, d.low]}>
        <XAxis />
        <yAxis />
        <CandlestickSeries />
      </Chart>
      <CrossHairCursor />
    </ChartCanvas>
  );
};

export const StockChart = withSize({ style: { minHeight: 600 } })(
  withDeviceRatio()(MainChart)
);
