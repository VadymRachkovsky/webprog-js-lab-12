// task2.js
async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log("Користувачі:", users);
  }
  
  async function fetchUserById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    console.log(`Користувач з ID ${id}:`, user);
  }
  
  fetchUsers();
  fetchUserById(1);
  