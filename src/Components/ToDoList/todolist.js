import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";
import { Done, Delete } from "@material-ui/icons";

const TodoList = () => {
  const [todosData, setTodosData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10")
      .then((response) => {
        setTodosData(() => response.data);
        setLoading(() => false);
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
   if(inputValue.length>0){
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: inputValue,
        userId: 1,
        checked: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json()).then(data=> setTodosData(()=> [...todosData, data]))
  }else{
    alert('Please enter something!')
  }
  };
  const editTodo = (id,title, checked) => {
    fetch('https://jsonplaceholder.typicode.com/todos/'+id, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: title,
        completed: checked,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setTodosData(()=> todosData.map(todo=> todo.id==json.id? json: todo)));
  };
  const deleteTodo = (id) => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "DELETE",
    }).then((response) =>
      setTodosData(() => todosData.filter((todo) => todo.id != id))
    );
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{
      backgroundColor: "#23272a",
      marginTop: 100,
    }}>
      <h1 style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: 40,
      color: "#f3f3f3",
      marginLeft: 20,
    }}
      >Todolists</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        <input
        style={{ 
          border: "1px solid grey",
          borderRadius: 5,
          padding: "0.6% 0",
          width: 250,
        }}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(() => e.target.value)}
        />
        <div
          style={{ 
            cursor: "pointer", 
            border: "1px solid grey",
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            padding: "0.5% 3%",
            color: "#f3f3f3",
            marginLeft: 20,
            textAlign: "center",
            backgroundColor: "#121314"
          }}
          onClick={(e) => addTodo(e)}
        >
          Add
        </div>
      </div>
      <Paper>
        <Grid container>
          {todosData.map((todo, index) => (
            <Grid item md={12}>
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid grey",
                  textDecoration: todo.completed ? "line-through" : "none",
                  justifyContent: "space-between",
                  backgroundColor: "#23272a",
                  paddingLeft: 20,
                  fontSize: 16,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 50,
                  paddingRight: 20,
                  color: "#b4c0cf",
                }}
              >
                <h3
                 style={{
                  fontSize: 16,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                }}
                >{todo.title}</h3>
                <div>
                  <Done onClick={() => editTodo(todo.id, todo.title, !todo.completed)}
                  style={{
                    color: "rgb(0, 255, 13)",
                    fontSize: 30,
                  }} />
                  <Delete onClick={() => deleteTodo(todo.id)} 
                  style={{
                    color: "rgb(255, 60, 0)",
                    marginLeft: "30px",
                    fontSize: 30,
                  }}/>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default TodoList;
