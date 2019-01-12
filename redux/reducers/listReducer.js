import {FETCH_LIST_ITEMS} from '../actions/AllActions'

const initialState = {
    listItems:{}
}

const getListItems = (state = initialState,action) => {
    
    switch(action.type)
    {
        case FETCH_LIST_ITEMS : 
                      return {
                          ...state,
                          listItems:action.payload,
                          typeofList:action.listType
                      }
        default : 
                  return state;             
                               
    }
}


export default getListItems;