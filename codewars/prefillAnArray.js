function prefill(n, v) {

	// if (n === 0) {
  //   return [];
  // }

  // if (!Number.isInteger(Number(n)) || n < 0) {
  //   throw new TypeError(`${n} недопустимо`);
  // }

  // return Array.from({ length: n }, () => v === undefined ? undefined : v);

	if (n === 0) {
    return [];
  }

  if (isNaN(parseInt(n)) || parseInt(n) < 0) {
    throw new TypeError(`${n} недопустимо`);
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(v === undefined ? undefined : v);
  }

  return result;
}

// prefill(3,1) --> [1,1,1]
prefill(3,1)