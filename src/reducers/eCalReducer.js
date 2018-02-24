/**
 * Created by Will on 2/17/2018.
 */
import { combineReducers } from 'redux'

const monDefault = [
  {hour: 7, available: 0, changed: false, closed: false},
  {hour: 8, available: 0, changed: false, closed: false},
  {hour: 9, available: 0, changed: false, closed: false},
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false },
  {hour: 17, available: 0, changed: false, closed: false},
  {hour: 18, available: 0, changed: false, closed: false},
  {hour: 19, available: 0, changed: false, closed: false},
  {hour: 20, available: 0, changed: false, closed: false},
  {hour: 21, available: 0, changed: false, closed: false},
  {hour: 22, available: 0, changed: false, closed: false},
  {hour: 23, available: 0, changed: false, closed: false},
  {hour: 24, available: 0, changed: false, closed: false}
]
const tuesDefault = [
  {hour: 7, available: 0, changed: false, closed: false},
  {hour: 8, available: 0, changed: false, closed: false},
  {hour: 9, available: 0, changed: false, closed: false},
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false },
  {hour: 17, available: 0, changed: false, closed: false},
  {hour: 18, available: 0, changed: false, closed: false},
  {hour: 19, available: 0, changed: false, closed: false},
  {hour: 20, available: 0, changed: false, closed: false},
  {hour: 21, available: 0, changed: false, closed: false},
  {hour: 22, available: 0, changed: false, closed: false},
  {hour: 23, available: 0, changed: false, closed: false},
  {hour: 24, available: 0, changed: false, closed: false}
]
const wedDefault = [
  {hour: 7, available: 0, changed: false, closed: false},
  {hour: 8, available: 0, changed: false, closed: false},
  {hour: 9, available: 0, changed: false, closed: false},
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false },
  {hour: 17, available: 0, changed: false, closed: false},
  {hour: 18, available: 0, changed: false, closed: false},
  {hour: 19, available: 0, changed: false, closed: false},
  {hour: 20, available: 0, changed: false, closed: false},
  {hour: 21, available: 0, changed: false, closed: false},
  {hour: 22, available: 0, changed: false, closed: false},
  {hour: 23, available: 0, changed: false, closed: false},
  {hour: 24, available: 0, changed: false, closed: false}
]
const thursDefault = [
  {hour: 7, available: 0, changed: false, closed: false},
  {hour: 8, available: 0, changed: false, closed: false},
  {hour: 9, available: 0, changed: false, closed: false},
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false },
  {hour: 17, available: 0, changed: false, closed: false},
  {hour: 18, available: 0, changed: false, closed: false},
  {hour: 19, available: 0, changed: false, closed: false},
  {hour: 20, available: 0, changed: false, closed: false},
  {hour: 21, available: 0, changed: false, closed: false},
  {hour: 22, available: 0, changed: false, closed: false},
  {hour: 23, available: 0, changed: false, closed: false},
  {hour: 24, available: 0, changed: false, closed: false}
]
const friDefault = [
  {hour: 7, available: 0, changed: false, closed: false},
  {hour: 8, available: 0, changed: false, closed: false},
  {hour: 9, available: 0, changed: false, closed: false},
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false },
  {hour: 17, available: 0, changed: false, closed: true},
  {hour: 18, available: 0, changed: false, closed: true},
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]
const satDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
  {hour: 8, available: 0, changed: false, closed: true},
  {hour: 9, available: 0, changed: false, closed: true},
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false},
  {hour: 17, available: 0, changed: false, closed: true},
  {hour: 18, available: 0, changed: false, closed: true},
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]
const sunDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
  {hour: 8, available: 0, changed: false, closed: true},
  {hour: 9, available: 0, changed: false, closed: true},
  {hour: 10, available: 0, changed: false, closed: true},
  {hour: 11, available: 0, changed: false, closed: true},
  {hour: 12, available: 0, changed: false, closed: true },
  {hour: 13, available: 0, changed: false, closed: true},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false },
  {hour: 17, available: 0, changed: false, closed: false},
  {hour: 18, available: 0, changed: false, closed: false},
  {hour: 19, available: 0, changed: false, closed: false},
  {hour: 20, available: 0, changed: false, closed: false},
  {hour: 21, available: 0, changed: false, closed: false},
  {hour: 22, available: 0, changed: false, closed: false},
  {hour: 23, available: 0, changed: false, closed: false},
  {hour: 24, available: 0, changed: false, closed: false}
]

const scheduleReducer = (state={schedule:{M:monDefault, T:tuesDefault, W:wedDefault, R:thursDefault, F:friDefault, S:satDefault, U:sunDefault}}, action) => {
    switch(action.type) {
        case "GET_AVAILABILITY":
          console.log(action.schedule)
            let new_schedule = {
              M: action.schedule[0],
              T: action.schedule[1],
              W: action.schedule[2],
              R: action.schedule[3],
              F: action.schedule[4],
              S: action.schedule[5],
              U: action.schedule[6],
            }
            return {...state, schedule:new_schedule}
        case "GET_SCHEDULED":
            return {...state, schedule:action.schedule}
        default:
            return state
    }
}

const sideBarReducer = (state={toggle:false}, action) => {
    switch(action.type) {
        case "TOGGLEBURGER":
            return {...state, toggle:action.toggle}
        default:
            return state
    }

}


const userReducer = (state={netids:[]}, action) => {
    switch(action.type) {
        case "GET_NETIDS":
            return {...state, netids:action.netids}
        default:
            return state
    }
}
const activeReducer = (state={user:{}, schedule:{M:[], T:[], W:[], R:[], F:[], S:[], U:[]}}, action) => {

    switch(action.type) {
        case "USER_SELECTED":
            console.log(action.user)
            return {...state, user:action.user}
        case "GENERATE":
            return {...state, schedule:action.schedule}
        default:
            return state
    }
}

export default combineReducers({
    sideBarReducer, userReducer, activeReducer, scheduleReducer
})
