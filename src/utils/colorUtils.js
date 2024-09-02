const getRandomHexChar = () => {
  const HEX_CHARS = "0123456789ABCDEF";
  return HEX_CHARS[Math.floor(Math.random() * 16)];
};

export const getRandomColor = () => {
  return `#${new Array(6).fill(null).map(getRandomHexChar).join("")}`;
};

export const generateColors = (count = 5) =>
  new Array(count).fill(null).map(getRandomColor);

export const getContrastColor = (color) => {
  const [r, g, b] = [1, 3, 5].map((index) =>
    parseInt(color.slice(index, index + 2), 16)
  );

  const luminance =
    [r, g, b].reduce(
      (sum, val, i) => sum + [0.2126, 0.7152, 0.0722][i] * val,
      0
    ) / 255;

  return luminance > 0.5 ? "#000000" : "#FFFFFF";
};
