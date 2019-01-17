function stringToNumber(value: string | number) {
  if (typeof value === 'string') {
    return parseInt(value, 10);
  }
  return value;
}
