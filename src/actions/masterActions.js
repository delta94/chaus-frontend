/**
 * Created by Will and Josh on 11/19/2017.
 */
// export const url =  'http://riceapps.org:3240';
export const url =  'http://localhost:3000';
//export const url =  'https://chaus-backend.herokuapp.com';
// export const url =  'http://localhost:3000';

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

function update_user_total_hours(netid, hour_obj) {
    resource('GET', 'master/hourtotal/'+netid).then(r => {
        hour_obj.total += Number(r);
    });
    console.log("hope this works", hour_obj)
    console.log("total", hour_obj.total)
    return hour_obj
}

function create_users_hours() {
    var userHrs = {};
    resource('GET', 'users').then(r => {
        r.map((user) => {userHrs[user.netid] = update_user_total_hours(user.netid,
            {max: user.maxHour,
            min: user.minHour,
            total: 0})
        });
    });
    return userHrs
}

export const open_modal = (dayname, hour) => {
    return (dispatch) => {
        console.log("open_modal called")
        console.log(dayname, hour.hour)
        resource('GET', 'master/shift/'+ dayname + '/' + (hour.hour - 7)).then( r => {
            // console.log("Here is something else", resource('GET','users').then (s => {}))
            console.log("HERE IS R", r);
            console.log("user hour object", create_users_hours())
            return dispatch({
                type: "SHIFT_SELECTED",
                p1: r[1],
                p2: r[2],
                p3: r[3],
                p4: r[4],
                schedule: r.scheduled,
                hour: r.hour,
                open: true,
                dayname: dayname,
                userHours: create_users_hours()
            })
        })
    }}


export const check_hours = (dayname, hour) => {
    return (dispatch) => {
        resource('GET', 'master/shift/'+ dayname + '/' + (hour.hour - 7)).then( r => {
            console.log("HERE IS R", r)
            return dispatch({
                type: "SHIFT_SELECTED",
                p1: r[1],
                p2: r[2],
                p3: r[3],
                p4: r[4],
                schedule: r.scheduled,
                hour: r.hour,
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

export const save_shift = (schedule, p1, p2, p3, p4, weekday, hour) => {
    const payload = {"p1": p1, "p2": p2, "p3": p3, "p4": p4, "schedule": schedule, "weekday": weekday, "hour": hour}
    return (dispatch) => {
        resource('PUT', 'master/update/'+weekday +'/'+hour, payload).then( info => {
            dispatch({
                type: "SHIFT_SAVED",
                changes_saved: true
            })
        })
    }
}