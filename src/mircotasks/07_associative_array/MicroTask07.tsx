import {TodoList} from "./components/TodoList";
import {v1} from "uuid";
import {useState} from "react";

export type FilterValuesType = "all" | "active" | "completed";

type TodoListType = {
  id: string
  title: string
  filter: FilterValuesType
}

export const MicroTask07 = () => {
  // let [tasks, setTasks] = useState([
  //     {id: v1(), title: "HTML&CSS", isDone: true},
  //     {id: v1(), title: "JS", isDone: true},
  //     {id: v1(), title: "ReactJS", isDone: false},
  //     {id: v1(), title: "Rest API", isDone: false},
  //     {id: v1(), title: "GraphQL", isDone: false},
  // ]);
  // let [filter, setFilter] = useState<FilterValuesType>("all");

  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
  ])

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false},
      {id: v1(), title: "Rest API", isDone: false},
      {id: v1(), title: "GraphQL", isDone: false},
    ],
    [todolistID2]: [
      {id: v1(), title: "Bread", isDone: true},
      {id: v1(), title: "Milk", isDone: false},
      {id: v1(), title: "Cheese", isDone: true},
      {id: v1(), title: "Sugar", isDone: true},
      {id: v1(), title: "Salt", isDone: false},
    ]
  });


  function removeTask(todoList_Id: string, task_Id: string) {
    setTasks({...tasks, [todoList_Id]: tasks[todoList_Id].filter(t => t.id !== task_Id)});
  }

  function addTask(todoList_Id: string, title: string) {
    setTasks({...tasks, [todoList_Id]: [{id: v1(), title, isDone: false}, ...tasks[todoList_Id]]});
  }

  function changeStatus(todoList_Id: string, task_Id: string, isDone: boolean) {
    setTasks({...tasks, [todoList_Id]: tasks[todoList_Id].map(t => t.id === task_Id ? {...t, isDone} : t)});
  }

  function changeFilter(todoList_ID: string, value: FilterValuesType) {
    setTodoLists(todoLists.map(tl => tl.id === todoList_ID ? {...tl, filter: value} : tl));
  }


  return (
    <div className="App">
      {todoLists.map(tl => {
        let tasksForTodolist = tasks[tl.id];

        if (tl.filter === "active") {
          tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
        }
        if (tl.filter === "completed") {
          tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
        }

        return (
          <TodoList
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={tl.filter}
          />
        );
      })}

    </div>
  );
};