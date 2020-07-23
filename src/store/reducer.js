const ini={
    Counter:0
}


const reducer=(state=ini,action)=>{
    if(action.type==="inc"){
        return {Counter:state.Counter+1}
    }
    if(action.type==="dec"){
        return {Counter:state.Counter-1}
    }
    if(action.type==="add5"){
        return {Counter:state.Counter+5}
    }
    if(action.type==="sub5"){
        return {Counter:state.Counter-5}
    }
    return state
}

export default reducer