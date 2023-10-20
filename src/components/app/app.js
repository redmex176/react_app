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
            ],
            term: '', 
            filter: 'all'
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

    onTogleIncrease = (id) =>{
       this.setState(({data}) => ({
            data : data.map(item => {
                if(item.id === id) {
                    return { ...item, increase: !item.increase}
                } 
                return item;
            })
       }))
    }

    onTogleLike = (id) =>{
        this.setState(({data}) => ({
            data : data.map(item => {
                if(item.id === id) {
                    return { ...item, like: !item.like}
                } 
                return item;
            })
       }))
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render () {

        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo 
                employees={employees}
                increased={increased}/>
                
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter
                    onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList 
                data={visibleData}
                deleteItem={this.onDelete}
                onTogleIncrease={this.onTogleIncrease}
                onTogleLike={this.onTogleLike}
                />

                <EmployeesAddForm onAdd = {this.addItem}/>
    
            </div>
        );
    }
    
}

export default App;