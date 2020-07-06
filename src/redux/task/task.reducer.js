 const INITIAL_STATE = {
     tasks: [
         {
             done: true,
             name: "Crear primera tarea de Evertask",
             duration: "two days"
         },
         {
            done: false,
            name: "Incorporar a firebase las tareas Evertask",
            duration: "four days"
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