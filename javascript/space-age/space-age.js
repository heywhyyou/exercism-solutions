//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const orbitalPeriodEarth = 31557600;
  if (planet === "earth") {
    return Number((seconds / orbitalPeriodEarth).toFixed(2));
  } else if (planet === "mercury") {
    return Number((seconds / (orbitalPeriodEarth * 0.2408467)).toFixed(2));
  } else if (planet === "venus") {
    return Number((seconds / (orbitalPeriodEarth * 0.61519726)).toFixed(2));
  } else if (planet === "mars") {
    return Number((seconds / (orbitalPeriodEarth * 1.8808158)).toFixed(2));
  } else if (planet === "jupiter") {
    return Number((seconds / (orbitalPeriodEarth * 11.862615)).toFixed(2));
  } else if (planet === "saturn") {
    return Number((seconds / (orbitalPeriodEarth * 29.447498)).toFixed(2));
  } else if (planet === "uranus") {
    return Number((seconds / (orbitalPeriodEarth * 84.016846)).toFixed(2));
  } else if (planet === "neptune") {
    return Number((seconds / (orbitalPeriodEarth * 164.79132)).toFixed(2));
  }
};
