const logString = (arg: unknown): void => {
    if(typeof arg === 'string') {
        console.log(arg);
    }else {
        console.error('Error: Input is not a string.')
    }
}

logString(55);