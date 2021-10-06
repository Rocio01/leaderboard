import Result from './Result';

const managerArr = (arr, myCallback) => {
  const wilmer = new Result('Wilmer', '100');
  const paola = new Result('Paola', '100');
  const alexis = new Result('alexis', '100');
  const andrea = new Result('Andrea', '100');

  Result.addResult(wilmer, arr);
  Result.addResult(paola, arr);
  Result.addResult(alexis, arr);
  Result.addResult(andrea, arr);

  myCallback(arr);
};

export { managerArr as default };