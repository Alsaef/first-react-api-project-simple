import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
function App() {
  return (
    <div className="App">
     <UsersData></UsersData>
    </div>
  );
}
function UsersData() {
  const [users,setUsers]=useState([])
  useEffect(() =>{
    fetch("https://reqres.in/api/users?page=1")
    .then(res => res.json())
    .then(data => setUsers(data.data))
  },[])
  return(
    <div>
      <div>
      {
       users.map(user=><UsersInterFace first_name={user.first_name} last_name={user.last_name} imgSrc={user.avatar} email={user.email}></UsersInterFace>)
      }
      </div>
    </div>
  )
}
function UsersInterFace(props) {
  return(
    <section className='container'>
       <div className='userDefind col'>
       <img src={props.imgSrc} alt="" />
        <h2 className='text'>User Name: {props.first_name} {props.last_name}</h2> 
        <h2 className='text'>User email: {props.email}</h2>
       </div>
    </section>
  )
}
export default App;
