const fakeDatabase = {
  todos:[1,2,3]
}


const delay = (ms) => 
  new Promise(resolve => {
    console.log('construct Promise')
    setTimeout(resolve, ms)
  });

const fetchTodos = ( filter ) =>
  delay(500).then(() => {
    console.log('switch')
    switch(filter){
      case 'all':
        return fakeDatabase.todos;
    }
  })


fetchTodos('all').then(todos => {
    console.log(todos);
  }
);

console.log('immediate')