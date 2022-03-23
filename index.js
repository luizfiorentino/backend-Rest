// Setting the server up
const express = require("express");
const { all } = require("express/lib/application");
const app = express();
const PORT = 4000;

// Importing users and lists
const User = require("./models").user;
const TodoList = require("./models").todoList;

// Use "express.json()" to parse incoming JSON requests and puts the parsed data in req. body
app.use(express.json());

// Setup test
app.post("/echo", (req, res) => {
  res.json(req.body);
});

// Find all users
app.get("/users", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    if (!allUsers) {
      res.status(404).send("Data not found");
    } else {
      res.json(allUsers);
      console.log(`Total number of enroled users: ${allUsers.length}`);
    }
  } catch (e) {
    next(e);
  }
});

// Fetch the correct user from the database and return it as a JSON response.
app.get("/users/:userId", async (req, res, next) => {
  const userId = parseInt(req.params.userId);
  const idParams = await User.findByPk(userId);
  return (
    idParams ? res.send(idParams) : res.status(404).send("Not found"), next
  );
});

//Create a new user account. Add a row to the user table
app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Please provide a valid email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

// Updating a user
app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

//Implement a GET endpoint for all todoLists.
app.get("/todoLists", async (req, res, next) => {
  try {
    const allLists = await TodoList.findAll();
    res.json(allLists);
  } catch (e) {
    next(e);
  }
});

// Implement the POST and PUT handlers for the todoLists, use the ones we defined
//for user as a starting point. The endpoints could be POST - /todoLists and GET - /todoLists/:listId for example.
app.post("/todoLists", async (req, res, next) => {
  try {
    const name = req.body.name;
    if (!name || name === " ") {
      res.status(400).send("Please inform the list's name");
    } else {
      const newList = await TodoList.create(req.body);
      res.json(newList);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/todoLists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const thisList = await TodoList.findByPk(listId);

    if (!thisList) {
      res.status(404).send("Pls provide a valid listId");
    } else {
      res.send(thisList);
    }
  } catch (e) {
    next(e);
  }
});

app.put("/todoLists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const listToUpdate = await TodoList.findByPk(listId);
    if (!listToUpdate) {
      res.status(404).send("please inform a valid list id");
    } else {
      const updatedList = await listToUpdate.update(req.body);
      res.json(updatedList);
    }
  } catch (e) {
    next(e);
  }
});

// Display the lists belonging to a chosen user
app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [TodoList],
    });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user.todoLists);
    }
  } catch (e) {
    next(e);
  }
});

// Use the previous snippet to implement the "read a single list" end-point.

// Update an existing list
app.put("/users/:userId/lists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const toUpdate = await TodoList.findByPk(listId);
    if (!toUpdate) {
      res.status(404).send("List not found");
    } else {
      const updated = await toUpdate.update(req.body);
      res.json(updated);
    }
  } catch (e) {
    next(e);
  }
});
// Implement the route to create a list for a user on the /users/:userId/lists endpoint. What HTTP method
// and URL should it respond to? Use the TodoList.create method, like we did for users. Additionally, it would
// be nice to validate/confirm that a task created for a non-existent user results in a 404.

app.post("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      const newList = await TodoList.create({ userId, ...req.body });
      res.json(newList);
    }
  } catch (e) {
    next(e);
  }
});

// Delete a user's list
app.delete("/users/:userId/lists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const toDelete = await TodoList.findByPk(listId);
    if (!toDelete) {
      res.status(404).send("List not found");
    } else {
      const deleted = await toDelete.destroy();
      res.json(deleted);
    }
  } catch (e) {
    next(e);
  }
});

// Delete all users' lists
app.delete("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, { include: [TodoList] });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      // *** will delete each item of the list in async operation
      user.todoLists.forEach(async (list) => await list.destroy());
      res.status(204).send();
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log("Listening on port:", PORT));
