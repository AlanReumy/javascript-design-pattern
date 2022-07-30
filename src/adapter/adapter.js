const getCity = () => {
  const citys = [
    { name: "shanghai", id: 1 },
    { name: "guangzhou", id: 2 },
  ];
  return citys;
};

const render = function (fn) {
  console.log("render");
  document.write(JSON.stringify(fn()));
};

render(getCity);

/* 
new data struct

const citys = {
  shenzheng: 11,
  guangzhou: 12,
}; 
*/

const adapterCity = (fn) => {
  const address = {},
    oldAddress = fn();
  oldAddress.forEach((c) => {
    address[c.name] = c.id;
  });
  return () => {
    return address;
  };
};

render(adapterCity(getCity));
