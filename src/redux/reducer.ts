import * as types from "./actionTypes"

const initialState= {
    recipes: [] ,
    error:null,
    loading:false,
};

const recipeReducer=(state=initialState, action:any) => {
    console.log('cococi', action.payload);

    switch(action.type)
       {
        case types.FETCH_RECIPIE_START:
            return {
                   ...state, 
                   loading:true
                   }
        case types.FETCH_RECIPIE_SUCCESS:
            return {
                   ...state,
                   loading: false,
                   recipes:action.payload,
                   }
        case types.FETCH_RECIPIE_FAIL:
            return {
                  ...state,
                  loading: false,
                  error: action.playload,
                  }       
        default: 
            return {...state};
       }
}

export default recipeReducer;