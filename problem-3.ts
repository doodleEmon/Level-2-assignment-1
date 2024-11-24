const filterEvenNumbers = (arr: number[]): number[] => {
    const even = arr.filter(number => number % 2 === 0);
    return even;
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);