import { useSelector, useDispatch } from "react-redux";
import {actions} from './store/index'
const ReduxTutorials = () => {
  //redux
  
  const counter = useSelector(
    (state) => state.counter
  )
  const age = useSelector(
    (state) => state.age
  )
const state = useSelector(state => state)
  const dispatch = useDispatch();



  const increment = () => {
    dispatch(actions.increment())
    
  }
  const decrement = () => {
    dispatch(actions.decrement())
  }

  const addBy = () => {
    dispatch(actions.addBy(100))
  }

  //end redux

  return (
    <div className="container-fluid">
      <h2>{counter} people are {age} years old </h2>
      <button className="btn btn-success m-5" onClick={increment}> Increase</button>
      <button className="btn btn-danger m-5" onClick={decrement}> Decrease</button>
      <button className="btn btn-warning m-5" onClick={addBy}> Add by 100</button>

    </div>
  );
}

export default ReduxTutorials;