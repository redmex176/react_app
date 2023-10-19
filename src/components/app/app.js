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

    render () {

        const {data} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo 
                employees={employees}
                increased={increased}/>
                
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={data}
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