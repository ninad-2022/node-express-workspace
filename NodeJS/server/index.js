// creating server without express
// server is a network app
// port = 1024
// 2000

const http = require("http"); //This package turns your computer into server
let users = [
  { id: 1, name: "aaa", mobile: "1111", city: "Pune" },
  { id: 2, name: "bbb", mobile: "2222", city: "Mumbai" },
  { id: 3, name: "ccc", mobile: "3333", city: "Satara" },
  { id: 4, name: "ddd", mobile: "4444", city: "Nashik" },
  { id: 5, name: "eee", mobile: "5555", city: "Nagpur" },
];

// creating a server has two objects i.e request and response
const server = http.createServer((request, response) => {
  const { url, method } = request;

  // http://localhost:2022/users
  // http://localhost:2022/users/2
  if (url == "/users" && method == "GET") {
    response.write(JSON.stringify(users));
    response.end();
  } else if (url.search(/\/users\/[0-9]/) != -1 && method == "GET") {
    const arr = url.split("/"); // ["","users","4"]
    const id = arr[arr.length - 1];

    const user = users.find((user) => user.id == id);
    if (user) response.write(JSON.stringify(user));
    else response.write("invalid user id");
    response.end();
  } else if (url == "/users" && method == "POST") {
    let user = "";
    request.on("data", (chunk) => {
      console.log(`Data chunk available: ${chunk}`);
      user += chunk;
    });
    request.on("end", () => {
      // end of data
      users.push(JSON.parse(user));
      response.write("User created");
      response.end();
    });
  } else if (url.search(/\/users\/[0-9]/) != -1 && method == "DELETE") {
    // http://localhost:2022/users/2
    // method delete
    const arr = url.split("/");
    const id = arr[arr.length - 1];

    const arr1 = users.filter((u) => u.id != id);
    users = arr1;
    response.write("User deleted...");
    response.end();
  } else if (url.search(/\/users\/[0-9]/) != -1 && method == "PUT") {
    // http://localhost:2022/users/2
    // method put
    let user = "";
    const arr = url.split("/");
    const id = arr[arr.length - 1];

    // get data from request body
    request.on("data", (chunk) => {
      user += chunk;
    });

    request.on("end", () => {
      // get the user
      const existingUser = users.find((user) => user.id == id);
      if (!existingUser) {
        response.write("Invalid user id");
        response.end();
        return;
      }
      const newUser = JSON.parse(user);
      const updatedUser = { ...existingUser, ...newUser };
      const index = users.findIndex((u) => u.id == id);
      users.splice(index, 1, updatedUser);
      response.write("User updated");
      response.end();
    });
  } else {
    // http://localhost:2022/
    response.write("hi from server");
    response.end();
  }
});

//server listening with port num 2022
server.listen(2022, () => {
  console.log("server is listening...");
});

// post - to send the data to server
// get  - to fetch the data from server
// put - to update the resource on server
// delete - to delete a resource on server
