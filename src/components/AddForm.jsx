import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import actionTypes from "../store/actionTypes";
import { addTodo } from "../action/todoAction";
import axios from "axios";
import api from "../utils/api";




const AddForm = () => {
 const dispatch= useDispatch()


  const handleSubmit = (e)=> {
    e.preventDefault();

    const newTodo = {
      id:v4(),
      text:e.target[0].value,
      is_done:false,
      created_at:new Date().toLocaleDateString(),


    }
api
.post('/todos',newTodo)
.then(()=>dispatch(addTodo(newTodo)) )
.catch((err)=> alert('üzgünüz hata olustu'))

     

    e.target.reset();
  }


  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input className="form-control" placeholder="typescript projesi" type="text" />
      <button className="btn btn-warning">Gönder</button>
    </form>
  )
}

export default AddForm;