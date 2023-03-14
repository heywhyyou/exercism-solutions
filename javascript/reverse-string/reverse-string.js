//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  let reversed = "";
  for (let i = 0; i < string.length; i++) {
    reversed = `${string[i]}${reversed}`;
  }
  return reversed;
};
