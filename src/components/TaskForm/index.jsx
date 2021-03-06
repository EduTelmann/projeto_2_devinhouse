import React, { useState } from "react";
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

const TaskForm = ({onSubmit, removeall}) => {
    const [task, setTask] = useState("");
    const [color, setColor] = useState("#ffe72d");
    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker)
    };

    const handleClose = () => {
        setDisplayColorPicker(false)
    };

    const handleChange = (color) => {
        setColor(color.hex)
    };

    const styles = reactCSS({
        'default': {
          color: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: `${color}`,
          },
          swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.3)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
      });

    return (
        <div className="task-form">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="task"
                    placeholder="Tarefa"
                    className="task-inputtext"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                    autoComplete={false}
                    required
                />
                <div className="task-color">
                    <div style={ styles.swatch } onClick={handleClick}>
                        <div style={ styles.color } />
                    </div>
                    {displayColorPicker ? <div style={ styles.popover }><div style={ styles.cover } onClick={handleClose}/><SketchPicker color={color} onChange={handleChange} /></div> : null }
                </div>
                <input
                    type="hidden"
                    name="color"
                    value={color}
                    required
                />
                <input 
                type="submit"
                value="Enviar"
                className="task-inputsubmit"
                />
            </form>
            <button className="task-clear" onClick={removeall}>Limpar todas</button>
        </div>
    );
};

export default TaskForm;
