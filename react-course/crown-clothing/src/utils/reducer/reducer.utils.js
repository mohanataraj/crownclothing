export const createAction = (type, payload) => {
    console.log("type", type)
    return {type,payload}
}