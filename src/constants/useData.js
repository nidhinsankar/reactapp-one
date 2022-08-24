import { tsvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';
import { useEffect, useState } from 'react';

const parseDate = timeParse('%Y-%m-%d');

const parseData = () => {
  return (d) => {
    const date = parseDate(d.date);
    if (date === null) {
      d.date = new Date(Number(d.date));
    } else {
      d.date = new Date(date);
    }

    for (const key in d) {
      if (key !== 'date' && Object.prototype.hasOwnProperty.call(d, key)) {
        d[key] = +d[key];
      }
    }

    return d;
  };
};

export function useData(dataSet = 'MINUTES') {
  const [data, setData] = useState();

  useEffect(() => {
    if (!data) {
      fetch(
        `https://raw.githubusercontent.com/reactivemarkets/react-financial-charts/master/packages/stories/src/data/${dataSet}.tsv`
      )
        .then((response) => response.text())
        .then((data) => tsvParse(data, parseData()))
        .then((data) => {
          setData(data);
        });
    }
  }, [data, setData]);

  return { data, loaded: Boolean(data) };
}
