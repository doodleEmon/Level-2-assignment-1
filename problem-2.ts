const largestElement = (arr: number[]): number | undefined => {
    return arr.reduce((largest, current) => (current > largest ? current : largest), arr[0]);
}

largestElement([10, 5, 8, 20, 3]);
