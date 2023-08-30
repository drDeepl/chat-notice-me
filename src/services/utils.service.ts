export function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generatePass(length: number): string {
  // NOTE: function create password throught get random id from 33 to 90 of ASCII
  let pass: string = '';
  for (let i = 0; i < length; i++) {
    pass += String.fromCharCode(randomIntFromInterval(33, 90));
  }
  return pass;
}
