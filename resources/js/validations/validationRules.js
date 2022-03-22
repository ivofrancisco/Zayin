
export const empty = (input) => {
    return !input;
}

export const isEmail = (input) => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test(input);
}

