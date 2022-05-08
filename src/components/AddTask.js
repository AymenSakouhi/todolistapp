import { useState } from "react";

const AddTask = ({onAdd}) => {
  
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
  
    const onSubmit = (e) => {
      e.preventDefault()

      if(!text) {
        alert('Please add a task')
        return
      }

      onAdd({text, day, reminder})
      setText('')
      setDay('')
      setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input type="text" name="task" id="task" placeholder="Add Task"  value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="time">Day & Time</label>
        <input type="text" name="time" id="time" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Reminder</label>
        <input type="checkbox" name="reminder" id="reminder" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}/>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
