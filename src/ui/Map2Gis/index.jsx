import React from "react";
import Iframe from "react-iframe";

export const Map2Gis = () => {
  return (
    <Iframe
      width="100%"
      height="400px"
      url="http://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A42.87898318850082%2C%22lon%22%3A74.67150807380678%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22bishkek%22%7D%2C%22org%22%3A%2270000001019345153%22%7D"
    />
  );
};

export default React.memo(Map2Gis);
