
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [name , setName] = useState("");
  const [email , setMail] = useState("");
  const [newName , setNewName] = useState("");
  const [biolist , setBioList] = useState("");

useEffect (()=>{
  Axios.post('https://localhost:3000/read') . then((response)=>{
    console.log(response.data);
  }) ;
}, [] )

  const btn = () => {
Axios.post('https://localhost:3000/insert'
, {
  Name:Name , email : email 
});
  }
  return (
   
  <>
  <h1>
    CRUD APP WITH MERN
  </h1>
  <label> Name :</label>
  <input type="text" onChange={(event) =>{setName(event.target.value)}}/>

  <label> Email :</label>
  <input type="text" onChange={(event) =>{setMail(event.target.value)}}/>

  <button onClick={btn}> Add to list </button>

<h1>
  Food List 
</h1>
{
  biolist.map ((val ,key )=>{
    return (
    <div key={key} className="food">
      <h1>
        {val.name}
      </h1>
      <h1>
        {val.email}
      </h1>
      <input type={"text"} placeholder="Enter the value" 
       onChange={(event) =>{setMail(event.target.value)}}
       > </input>
      <button onClick={update}> Update</button>
      <button onClick={delet}> Delete</button>
    </div>
    )
  })
}
  </>
  );
}

export default App;
