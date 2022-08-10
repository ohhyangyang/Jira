export const valueIsTrue = (value) => value === 0 ? true : !!value;

export const cleanObject = (object) => {
    const result = {...object};
    Object.keys(result).forEach(key => {
        const value = result[key];
        if(!valueIsTrue(value)) {
            delete result[key]
        }
    })
    return result
}