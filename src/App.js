import React from 'react';
import {createTask as createTaskReq, getUserTasks, updateTaskById} from "./api";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            value: '',
            deadline: '',
            isDone: false,

            tasks: [],
            error: null,
        }
    }

    async componentDidMount() {
        const {data}=await getUserTasks()
        try{
                this.setState({tasks: data})

        }catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.group('componentDidUpdate');
        console.log('previous state:', prevState);
        console.log('thi state:', this.state);
        console.groupEnd()
    }

    createTask = async (e) => {
        e.preventDefault();
        try {
            this.setState({isFetching: true});
            const {data} = await createTaskReq({
                value: this.state.value,
                deadline: this.state.deadline,
                isDone:this.state.isDone
            });
            this.setState({
                tasks: [data, ...this.state.tasks]
            })
        } catch (err) {
            this.setState({
                error: `${err.response}`
            })
        } finally {
            this.setState({isFetching: false})
        }
    };

    handleValueChange = (e) => {
        const {name, type} = e.target;
        this.setState({
            [name]: type === 'checkbox'
                ? e.target.checked
                : e.target.value
        })
    };

    render() {
        const {tasks, error, isFetching, value, deadline, isDone} = this.state;

        return (<div>
                <form onSubmit={this.createTask}>

                    <label htmlFor="taskValueInput">
                        <span>Task value: </span>
                        <input id='taskValueInput'
                               type="text"
                               onChange={this.handleValueChange}
                               name='value'
                               value={value}/>
                    </label>
                    <br/>
                    <label htmlFor="taskDeadLineInput">
                        <span>Deadline: </span>
                        <input id='taskDeadLineInput'
                               type="date"
                               name='deadline'
                               onChange={this.handleValueChange}
                        />
                    </label>
                    <br/>
                    <label htmlFor="">
                        <span>Is Done: </span>
                        <input type="checkbox"
                               name='isDone'
                               onChange={this.handleValueChange}
                        />
                    </label>
                    <input type="submit"/>
                </form>
                <ul>
                    {
                        isFetching && (<li>Loading....</li>)
                    }
                    {
                        tasks.map(item => (<li key={item.id}>
                            {
                                `${item.value} 
                                ${item.deadline}
                                 isDone: ${item.isDone}`
                            }
                        </li>))
                    }
                </ul>
            </div>
        )
    }
}

export default App;
