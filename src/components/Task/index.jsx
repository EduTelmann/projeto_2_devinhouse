import React from "react";

const Task = ({task, chave, dbClick}) => {
    return (
        <div className="task" chave={chave} onDoubleClick={dbClick} style={{backgroundColor: task.color}}>
          {task.taskText}
        </div>
    );
};

export default Task;