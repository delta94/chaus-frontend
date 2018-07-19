import React, {Component} from 'react'
import React, { PureComponent } from 'react'
// Components
import EmployeeShift from './employeeShift';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/memberPage.scss';

const EmployeeDay = ({ dayName, shifts }) => {
    return (
        <div className="employee-day">
            <h1>{dayName}</h1>
            {shifts.map((shift) => {
                // Change logic here if availability structure changes
                let shiftId = shift.id;
                let availability = shift.availabilities[0].availability;
                let availabilityId = shift.availabilities[0].id;
                let startTime = shift.startTime;
                let changed = false;
                return (
                    <EmployeeShift
                        availability={availability}
                        dayName={dayName}
                        shiftId={shiftId}
                        hour={startTime}
                        availabilityId={availabilityId}
                        key={startTime}
                    />
                )
            })}
        </div>
    )
}

export default EmployeeDay