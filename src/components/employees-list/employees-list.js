import EmployeesListItem from '../emloyees-list-item/employees-list-item';

import './emploees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        return (
            <EmployeesListItem {...item}/>
        );
    }); 
    console.log(elements);
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;