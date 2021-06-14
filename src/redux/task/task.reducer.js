 const INITIAL_STATE = {
     tasks: [
         {
             done: true,
             name: "Crear primera tarea de Evertask",
             duration: "2"
         },
         {
            done: false,
            name: "Incorporar a firebase las tareas Evertask",
            duration: "4"
        },
        {
            done: true,
            name: "Fix visual issue",
            duration: "1"
        },
        {
            done: true,
            name: "Incorporar a firebase las tareas Evertask",
            duration: "12"
        }
     ]
}

const taskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default: 
           return state;
    }
}

export default taskReducer;