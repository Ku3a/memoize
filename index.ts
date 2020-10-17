function memoize<T extends Function>(fn: T): (...args: any) => T {
  const cache = new Map();

  return function memoized(...args) {
    const key = args[0];

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(args);
    cache.set(args, result);
    return result;
  };
}
