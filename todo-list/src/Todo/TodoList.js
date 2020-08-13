import React, {Component} from 'react';

class TodoList extends Component {
    constructor(){
        super();
        this.state ={
            userInput:'',
            items:[]
        };
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]

        });
    }

    deleteTodo(item){
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index,1)
        this.setState({
            items: array
        });

    }

    renderTodo(){
        return this.state.items.map((item) => {
            return (
                <div 
                    key={item}
                >
                   <li className="list-group-item d-flex justify-content-between">{item} <button  className="btn btn-primary" onClick={this.deleteTodo.bind(this, item)}>X</button></li>
                </div>

            )
        })
    }

    render() { 
        return ( 
            <div>
                <h1 align="center">Ma todo liste</h1>
                <form>
                   <input
                        className="form-control mb-2"  
                        value={this.state.userInput} 
                        type="text" 
                        placeholder="Renseigner un item"
                        onChange={this.onChange.bind(this)}
                    />
                   <button 
                        onClick={this.addTodo.bind(this)}
                        className="btn btn-primary"
                    >
                    Ajouter</button>
                </form>
                <div>
                    {this.renderTodo()}
                </div>
            </div>
         );
    }
}
 
export default TodoList;