import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

class App extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            data : [
                {name: "Alex", salary: 3000, increase: true, id: 1, like:false},
                {name: "Mike", salary: 4000, increase: false, id: 2, like:false},
                {name: "John", salary: 1000, increase: true, id: 3, like:false}, 
                {name: "Serg", salary: 2000, increase: false, id: 4, like:false}
            ]
        }
        this.maxId = 5;
    }

    onDelete = (id) => {
        console.log(id);
       this.setState(({data}) => {
        return {
            data: data.filter(item => item.id !== id)
        }
       })
        
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render () {

        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo/>
                
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={data}
                onDelete={this.onDelete}
                />

                <EmployeesAddForm onAdd = {this.addItem}/>
    
            </div>
        );
    }
    
}

export default App;