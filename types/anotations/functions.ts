const add = (a: number, b: number) => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string) => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (todaysWeather: { date: Date; weather: string }): void => {
  console.log(todaysWeather.date);
  console.log(weather);
};

const weather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};
// ES2015
const weatherLog = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
