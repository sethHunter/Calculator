import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import functionPlot from "function-plot";

const Plot = ({ options }) => {
  const rootEl = useRef(null);

  useEffect(() => {
    try {
      functionPlot(Object.assign({}, options, { target: rootEl.current }));
    } catch (err) {
      functionPlot(
        Object.assign(
          {},
          {
            ...options,
            target: '#vector',
            grid: true,
            yAxis: { domain: [-5, 5] },
            data: [
              {
                vector: [0, 0],
                offset: [1, 2],
                graphType: "polyline",
                fnType: "vector",
              },
            ],
          },
          { target: rootEl.current }
        )
      );
    }
  }, [options]);

  return <div ref={rootEl} />;
};

Plot.defaultProps = {
  options: {},
};

Plot.propTypes = {
  options: PropTypes.any,
};

export default Plot;