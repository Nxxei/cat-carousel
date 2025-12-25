import React from "react";

const cardCat = (prop) => {
  const { cat } = prop;
  return <div>{cat.imageUrl}</div>;
};

export default cardCat;
