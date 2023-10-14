import EmployeesListItem from '../emloyees-list-item/employees-list-item';

import './emploees-list.css';

const EmployeesList = ({data, onDelete, addEmployees}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}
            onDelete={() => onDelete(id)}
            addEmployees={() => addEmployees()}/>
        );
    }); 

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;