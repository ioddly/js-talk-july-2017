function parseString(name: string | number) {
  if (typeof name === 'string') {
    return parseInt(name, 10);
  }
  return name;
}
