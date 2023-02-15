//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let rainDrops = "";
  if (num % 3 === 0) {
    rainDrops += "Pling";
  }
  if (num % 5 === 0) {
    rainDrops += "Plang";
  }
  if (num % 7 === 0) {
    rainDrops += "Plong";
  }

  if (num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    return rainDrops;
  } else {
    return num.toString();
  }
};
