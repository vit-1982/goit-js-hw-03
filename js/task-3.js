// const findBestEmployee = function (employees) {
//   const keys = Object.keys(employees);
//   const values = Object.values(employees);
//   return keys[values.indexOf(Math.max(...values))];
// };

const findBestEmployee = function (employees) {
  const entries = Object.entries(employees);
  let bestEmployee = 'Лучшего не обнаружено';
  let maxTasks = 0;
  for (let i = 0; i < entries.length; i += 1) {
    const entry = entries[i];
    if (entry[1] > maxTasks) {
      maxTasks = entry[1];
      bestEmployee = entry[0];
    }
  }
  return bestEmployee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
