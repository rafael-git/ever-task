import React from 'react';


import './TaskCollection.scss';

const TaskCollection = (props) => {


    const elements = React.Children.toArray(props.children);

    return(
        <div className="task-container">
            <div className="task-header">
                <div className="header-text done">Done</div>
                <div className="header-text name">Name</div>
                <div className="header-text duration">Duration</div>
                <div className="header-text edit">Edit</div>

            </div>
            <div className="task-collection">
                {elements}
            </div>
        </div>
    );
}

export default TaskCollection;