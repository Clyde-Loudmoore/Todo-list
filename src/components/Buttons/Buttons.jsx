import './Buttons.css';



const Buttons = ({setFilterTaskStatus}) => {


    return (
      <div className='todo__buttons'>
        <button className='buttons'>All</button>
        <button className='buttons' onClick={setFilterTaskStatus("true")}>Active</button>
        <button className='buttons' onClick={setFilterTaskStatus("false")}>Copmlited</button>
      </div>
    );
  };
  
  export default Buttons;