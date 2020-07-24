import * as actionTypes from './actions'

const ini={
    Counter:0,
    Results:[]
}


const reducer=(state=ini,action)=>{
    switch(action.type){
        case actionTypes.inc:
            return {...state,Counter:state.Counter+1}
        case actionTypes.dec:
            return {...state,Counter:state.Counter-1}
        case actionTypes.add10:
            return {...state,Counter:state.Counter+action.val} 
        case actionTypes.sub10:
            return {...state,Counter:state.Counter-action.val} 
        case actionTypes.STORE:
            return {...state,Results:state.Results.concat({id:new Date(),val:state.Counter})}
        case actionTypes.DELE:
            const new_array=state.Results.filter((x)=>x.id!==action.RID)
            return {...state,Results:new_array}
    }
    return state
}

export default reducer
