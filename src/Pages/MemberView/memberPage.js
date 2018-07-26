import React, {Component} from 'react';
// Components
import EmployeeCalendar from './employeeCalendar';
import UserOptions from './userOptions';
import ColorLegend from '../color-legend';
import Sidebar from '../sidebar';
// GraphQL
import { graphql, compose } from 'react-apollo';
import { EmployeeCalendarQuery } from '../../graphql/queries/employee.graphql';
import { SetUserPreference, SaveUserPreference } from '../../graphql/mutations/employee.graphql';
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/memberPage.scss';

const legend = {
    "Undetermined": "#01b4bc",
    "Preferred": "#5fa55a",
    "Available": "#f6d51f",
    "Not Preferred": "#fa8925",
    "Unavailable": "#fa5457"
}

const MemberPage = ({ }) => {
    return (
        <div>
            <Sidebar />
            <div className="employee-container">
                <ColorLegend legend={legend} />
                <div className="employee-calendar-container">
                    <EmployeeCalendar />
                </div>
                <div className="user-options">
                    <UserOptions />
                </div>
            </div>
        </div>
    )
}

export default MemberPage;

// const MemberPage = ({ eSchedule, SetUserPreference, SaveUserPreference, initializeCalendar, selectUser }) => {
//     // console.log(schedules);
//     // initializeCalendar("wsm3");
//     selectUser("wsm3");
//     console.log(eSchedule);
//     // Schedules is array so get the first
//     const schedules = eSchedule;
//     return (
//         <div className="main-container">
//             <div className="employee-calendar-container">
//                 <EmployeeCalendar 
//                     schedule={schedules.week}
//                     SetUserPreference={SetUserPreference}
//                     SaveUserPreference={SaveUserPreference}
//                 />
//             </div>
//             <div className="user-options">
//                 <UserOptions />
//             </div>
//         </div>
//     )
// }

// export default compose(
//     // graphql(EmployeeCalendarQuery, { 
//     //     options: {
//     //         variables: {
//     //             netid: "wsm3"
//     //         }
//     //     }
//     // }),
//     graphql(SetUserPreference, { 
//         props: ({ mutate }) => ({
//             SetUserPreference: (id, availability) => mutate({
//                 variables: {
//                     id, availability
//                 },
//                 optimisticResponse: {
//                     __typename: "Mutation",
//                     updateShiftAvailability: {
//                         id: id,
//                         __typename: "UserAvailability",
//                         availability: availability
//                     }
//                 }
//             })
//         })
//      }),
//     graphql(SaveUserPreference, { name: 'SaveUserPreference' }),
//     connect(
//         (state) => {
//             return {
//                 eSchedule: state.eCal.newScheduleReducer.schedule
//             }
//         },
//         (dispatch) => {
//             return {
//                 initializeCalendar: (netid) => dispatch(initializeCalendar(netid)),
//                 selectUser: (netid) => dispatch(selectUser(netid))
//             }
//         }
//     )
//     // graphql(CreateUser, { name: 'CreateUser' })
// )(MemberPage)