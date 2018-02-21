/**
 * Created by Will and Josh on 11/19/2017.
 */
export const url =  'http://localhost:3000';
// export const url =  'https://chaus-backend.herokuapp.com';

export const resource = (method, endpoint, payload) => {
    // console.log("THE ENDPOINT: " + endpoint + "\n" + "THE PAYLOAD: " + payload + "\n" + "THE METHOD: " + method)
    const options =  {
        method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (payload) options.body = JSON.stringify(payload)

    // console.log('The options for ', endpoint, options)
    // console.log('The url: ',`${url}/${endpoint}`)
    return fetch(`${url}/${endpoint}`, options)
        .then(r => {
            if (r.status === 200) {
                return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
            } else {
                // useful for debugging, but remove in production
                console.error(`${method} ${endpoint} ${r.statusText}`)
                throw new Error(r.statusText)
            }
        })
        .catch(err => console.error(err))
}


export const open_modal = (dayname, hour) => {
    return (dispatch) => {
        resource('GET', 'master/shift/'+ dayname + '/' + hour.hour).then( r => {
            console.log(r)
            return dispatch({
                type: "SHIFT_SELECTED",
                available: r[0].availability,
                schedule: r[0].schedule,
                hour: r[0].hour,
                open: true,
                dayname: dayname
            })
        })
    }

}

export const close_modal = () => {
    return (dispatch) => {
            return dispatch({
                type: "CLOSE_MODAL",
                modal_open: false
            })
    }
}

export const toggle_scheduled = (netid) => {
  console.log("inside action")
  return (dispatch) => {
            return dispatch({
                type: "TOGGLE_SCHEDULED",
                netid: netid
            })
  }
}

export const save_shift = (schedule, availability, weekday, hour) => {
    const payload = {"availability": availability, "schedule": schedule, "weekday": weekday, "hour": hour}
    return (dispatch) => {
        resource('PUT', 'master/update/'+weekday +'/'+hour, payload).then( info => {
            dispatch({
                type: "SHIFT_SAVED",
                changes_saved: true
            })
        })
    }
}