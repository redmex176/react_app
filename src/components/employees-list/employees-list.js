import EmployeesListItem from '../emloyees-list-item/employees-list-item';

import './emploees-list.css';

const EmployeesList = ({data, deleteItem, onTogleIncrease, onTogleLike}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}
            onDelete={() => deleteItem(id)}
            onTogleIncrease={()=> onTogleIncrease(id)}
            onTogleLike={()=> onTogleLike(id)}
            />
        );
    }); 

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;