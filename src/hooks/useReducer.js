

function reducerObject(state, payload){
    
    return {
        "Confirmed":{
            ...state,
            loading: false,
            confirmed: true
        },
        "Error":{
            ...state,
            loading:false,
            error:true
        },
        "Write":{
            ...state,
            value: payload
        },
        "Check":{
            ...state,
            loading: !state.loading,
            error: false
        },
        "Back":{
            ...state,
            confirmed: false,
            value: ""
        },
        "Delete":{
            ...state,
            deleted: true,
        },
        "Recovery":{
            ...state,
            deleted:false,
            confirmed:false,
            value:""
        }
    }
}

function reducer(state, action){
    return reducerObject(state, action?.payload)[action.type] || state;
}

export {reducer}
