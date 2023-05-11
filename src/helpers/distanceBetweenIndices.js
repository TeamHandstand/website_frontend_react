export const distanceBetweenIndices = ({ from, to, length }) => {
  return (to - from + length) % length;
};
