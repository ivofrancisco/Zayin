

/*
* Appends item into FormData's
* class instance element
*/
export const appendFormItem = (element, item, target) => {
    if (typeof item === 'string') {
        target.append(element, item);
    } else {
        item.forEach(item => {
            target.append(element, item);
        });
    }
    return target;
};

/*
* Capitalizes the first
* letter from a string
*/
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}