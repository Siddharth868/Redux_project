export const inc = "inc"
export const dec = "dec"
export const add10 = "add10"
export const sub10 = "sub10"
export const STORE = "STORE"
export const DELE = "DELE"


export const incrementAsync=()=>{
    return {
        type: inc
    }
}

export const increment=()=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(incrementAsync())
        },4000)
    }
}

export const decrement=()=>{
    return {
        type: dec
    }
}
export const add=(value)=>{
    return {
        type: add10,
        val: value
    }
}
export const sub=(value)=>{
    return {
        type: sub10,
        val: value
    }
}
export const store1=()=>{
    return {
        type: STORE
    }
}
export const delete1=(id)=>{
    return {
        type: DELE,
        RID: id
    }
}
