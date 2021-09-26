import React from "react";
import Task from "../Task";
const TaskBoard = ({title, tasks, taskdone, dbClick}) => {
    const checkShow = (value) =>{
        if(value === taskdone){
            return true;
        }else{
            return false;
        }
    }
    const checkEmpty = (data) => {
        if(data.length > 0){
            let auxcont = 0;
            data.forEach(element => {
                if(checkShow(element.done)){
                    auxcont++;
                }
            });
            if(auxcont > 0){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    const countTasks = (data) => {
        if(data.length > 0){
            let auxcont = 0;
            data.forEach(element => {
                if(checkShow(element.done)){
                    auxcont++;
                }
            });
            return auxcont;
        }else{
            return 0;
        }
    }

    return (
        <div className="board">
            <div className="board-detail">
                <div className="board-info">
                    <p className="board-title">{title}</p>
                    <p className="board-count">{countTasks(tasks)} Tarefa(s)</p>
                </div>
                {checkEmpty(tasks) && (
                    <>
                {tasks.map((task, index) =>{
                    return (
                        (checkShow(task.done) && <Task task={task} key={index} chave={index} dbClick={dbClick} />)
                    );
                })}
                    </>
                )}

                {!checkEmpty(tasks) && <p>Nenhuma tarefa nesta sessão.</p>}


            </div>
        </div>
    );
};

export default TaskBoard;