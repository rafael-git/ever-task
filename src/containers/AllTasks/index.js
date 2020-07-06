import React from 'react';
import {connect} from 'react-redux';

import TaskCollection from '../../components/TaskCollection/index';
import Task from '../../components/Task';

const AllTasks = (props) => {
    return(
        <TaskCollection>
           {
               props.tasks.map(task => (
                   <Task name={task.name} duration={task.duration}/>
               ))
           }
        </TaskCollection>            
        
    );
}

const mapStateToProps = (state) => ({
    tasks: state.task.tasks
});

export default  connect(mapStateToProps)(AllTasks);