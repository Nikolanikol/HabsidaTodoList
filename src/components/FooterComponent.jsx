
import TasksFilterComponent from './TasksFilterComponent'
import PropTypes from "prop-types";

const FooterComponent = ({activeFilter,setActiveFilter, leftTasks, setTasks }) => {
const handleClearCompleted = ()=>{
    setTasks(state=>{
        return state.filter(item=>item.status == false)
        })
    }
  return (
    <footer className="footer">
        <span className="todo-count">{leftTasks} items left</span>
        <TasksFilterComponent activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
        <button onClick={()=>handleClearCompleted()} className="clear-completed">Clear completed</button>
    </footer>
  )
}

FooterComponent.propTypes ={
    activeFilter : PropTypes.string,
    setActiveFilter : PropTypes.func,
     leftTasks : PropTypes.number,
     setTasks: PropTypes.func

}
export default FooterComponent
