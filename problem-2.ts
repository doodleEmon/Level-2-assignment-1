const findLargestNumber = (arr: number[]): number | undefined => {
    if(arr.length === 0) {
        return undefined;
    }
    
    let largeNumber = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > largeNumber) {
            largeNumber = arr[i];
        }
    }
    return largeNumber;
}

findLargestNumber([10, 5, 8, 20, 3]);