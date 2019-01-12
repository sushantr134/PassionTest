import {FETCH_LIST_ITEMS} from '../AllActions'
import fetch from 'isomorphic-fetch'

export const getList = (listType) => {
    return (dispatch) => {
      fetch(`${process.env.LOCAL_API_URL}:${process.env.PORT}/api/${listType}`).then(res=>res.json())
      .then((data_received)=>{
          dispatch({
              type:FETCH_LIST_ITEMS,
              payload:data_received,
              listType:listType
          })
      })
    }
}
