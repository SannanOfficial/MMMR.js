/*

MIT License

Copyright (c) 2020 Sannan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

// Mean - The average value.
// Median - The mid point value.
// Mode - The most common value.
// Range The smallest and the biggest value.

// Mean returns the average value from an array of numbers.
const mean = (numbers) => {
  let total = 0,
    i;
  for (i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total / numbers.length;
};



// Median returns the middle point value from an array of numbers.
const median = (numbers) => {
  const sorted = numbers.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
};



// Mode returns the most common/used value from an array of string, numbers, etc.
const mode = (a) => {
  a.slice().sort((x, y) => x - y);

  let bestStreak = 1;
  let bestElem = a[0];
  let currentStreak = 1;
  let currentElem = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i - 1] !== a[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
      currentElem = a[i];
    }

    currentStreak++;
  }

  return currentStreak > bestStreak ? currentElem : bestElem;
};



// Range is basically a function used to return the smallest and the biggest values from an array of numbers.
const range = (numbers) => {
  numbers.sort();
  return [numbers[0], numbers[numbers.length - 1]];
};
