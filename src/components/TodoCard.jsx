import  Modal  from "../components/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux"
import actionTypes from "../store/actionTypes";
import { deleteTodo, updateTodo } from "../action/todoAction";
import api from "../utils/api";



const TodoCard = ({todo}) => {
    const [isOpen, setIsOpen]= useState(false)
const dispatch = useDispatch();

    const handleDelete =() => {
        api.delete(`/todos/${todo.id}`)
        .then(()=> dispatch(deleteTodo(todo.id)))
        .catch((err)=> alert('üzgünüz bir hata olustu'))
    }
    const toggleIsDone =() => {
        const updated= {...todo, is_done: !todo.is_done};

        api.put(`/todos/${todo.id}`,updated)
        .then(()=> dispatch (updateTodo(updated)) )
        .catch((err)=> alert('üzgünüz bir hata oluştu'))
       
    }

  return (
    <div className="shadow-lg border p-4 my-5">
      <h5> {todo.text}</h5>
      <h6> {todo.is_done? 'tamamlandı' : 'devam ediyor'} </h6>
      <p> {todo.created_at} </p>

      <button
      onClick={()=>setIsOpen(!isOpen)}
       className="btn btn-primary">Düzenleme</button>
      <button 
      
       onClick={toggleIsDone}
      className="btn btn-success mx-3">{todo.is_done ?'Geri Al': 'Tamamla'}</button>

      <button
      onClick={handleDelete}
       className="btn btn-danger">Sil</button>
    
    {isOpen && <Modal todo ={todo} close= {()=> setIsOpen(false)} />}
    
    </div>
  )
}

export default TodoCard
