const initialState ={
    
}

const categoryReducer =(state=initialState,action )=>{
    switch(action.type){
        case "set_app_data":

        

            return{
                ...state,
                user:action.payload.user,
            }
        case "remove_token":
            return{
                ...state,
                token:null,
            }
          
        default :
        return state
    }

}
 
export default categoryReducer