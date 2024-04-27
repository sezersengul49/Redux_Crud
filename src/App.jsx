import ListTodos from "./components/ListTodos";
import AddForm from "./components/AddForm";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodos } from "./action/todoAction";
import api from "./utils/api";


const App = () => {
  const dispatch =useDispatch();

  useEffect(()=>{
api.get('/todos')

.then((res)=>dispatch(setTodos(res.data)))

.catch((err)=>console.log(err))


  },[])
  return (
    <div className="vh-100 bg-dark vw-100 text-white">
      <div className=" container p-5">
        <h2 className="text-center">
          REDUX
          <span className="text-warning"> CRUD</span>
        </h2>
          <AddForm/>

          <ListTodos/>
      </div>
    </div>
  );
};

export default App;
