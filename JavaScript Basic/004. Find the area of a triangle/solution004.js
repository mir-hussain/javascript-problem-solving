const triangleArea = (a, b, c) => {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area.toFixed(2);
};

const area = triangleArea(5, 6, 7);

console.log(`The area of the triangle is ${area}`);
