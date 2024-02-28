function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < collection1.length && j < collection2.length && k < collection3.length) {
    const smallest = Math.min(collection1[i], collection2[j], collection3[k]);
    result.push(smallest);

    if (collection1[i] === smallest) {
      i++;
    } else if (collection2[j] === smallest) {
      j++;
    } else {
      k++;
    }
  }

  // Add remaining elements from collections that are not empty
  result.push(...collection1.slice(i));
  result.push(...collection2.slice(j).reverse());
  result.push(...collection3.slice(k));

  return result;
}

export { merge };
