const isFormData = (data) => {
    return data instanceof FormData;
}

const isNotNull = (value) => {
    return value !== null && value !== "" && value !== undefined;
}

export {
    isFormData,
    isNotNull
}