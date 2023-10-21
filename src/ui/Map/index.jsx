import React from "react";

export const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.795951926487!2d74.66889347621353!3d42.87715077114956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb724f0689eb1%3A0x362063db81bacc44!2zMzAg0YPQuy4g0JrQvtC70YzQsdCw0LXQstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1697896274759!5m2!1sru!2skg"
      width="100%"
      height="450"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default React.memo(Map);
