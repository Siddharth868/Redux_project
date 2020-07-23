const redux=require('redux')
const createStore=redux.createStore

const ini={
    Counter:0
}

const rootReducer=(state=ini,action)=>{
    if(action.type==="inc"){
        return {...state,Counter:state.Counter+1}
    }
    if(action.type==="add5"){
        return {...state,Counter:state.Counter+5}
    }
    return state
}

const store=createStore(rootReducer)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch({type:"inc"})
store.dispatch({type:"add5"})


