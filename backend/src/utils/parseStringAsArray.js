module.exports = function parseStringAsArray(string) {
  return string.split(",").map((word) => word.trim());
};
