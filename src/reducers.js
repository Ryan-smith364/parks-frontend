import { combineReducers } from "redux"
import {SET_PILLS, LOGIN, LOGOUT} from './actions/types'
// import { useStore } from "react-redux";


const pillReducer = (state = [], action) => {
   switch (action.type) {
     case SET_PILLS:
        return action.payload
     default:
       return state;
   }
 };

const userReducer = (state = null, action) => {
   switch (action.type) {
      case LOGIN:
         return action.payload
      case LOGOUT:
         return action.payload
   default:
      return state;
   }
}
fiovniovnerivbonbviefnbnviopfdnvpoid;bngveowmrnbefipmvbf mpgoeb v[e,pbf dspvea]

const rootReducer = combineReducers({
   pills: pillReducer,
   currentUser: userReducer
})

export default rootReducer
