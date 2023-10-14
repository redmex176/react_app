import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';




function App() {

    const data = [
        {name: "Alex", salary: 3000, increase: true, id: 1, like:false},
        {name: "Mike", salary: 4000, increase: false, id: 2, like:false},
        {name: "John", salary: 1000, increase: true, id: 3, like:false}, 
        {name: "Serg", salary: 2000, increase: false, id: 4, like:false}
    ];

    return (
        <div className="app">
            <AppInfo/>
            
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>

        </div>
    );
}

export default App;