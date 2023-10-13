import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';




function App() {

    const data = [
        {name: "Alex", salary: 3000, increase: true},
        {name: "Mike", salary: 4000, increase: false},
        {name: "John", salary: 1000, increase: true}, 
        {name: "Serg", salary: 2000, increase: false}
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