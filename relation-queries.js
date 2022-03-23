const { user, todoItem, todoList, tag } = require("./models");

async function itemsAndTags() {
  const itemsWithTags = await todoItem.findAll({
    include: [{ model: tag, attributes: ["title"] }],
  });
  return itemsWithTags.map((item) => item.get({ plain: true }));
}
itemsAndTags().then((items) => console.log(items));
async function listsWithUsers() {
  const lists = await todoList.findAll({
    //include: [user], //will display the whole object
    include: [{ model: user, attributes: ["name"] }],
  });
  return lists.map((list) => list.get({ plain: true }));
}
//listsWithUsers().then((lists) => console.log(lists));

//*** shows only [Object] instead of its content
async function getUsers() {
  const allUsers = await user.findAll({
    include: { model: todoList, attributes: ["name"] },
  });
  return allUsers
    ? allUsers.map((user) => user.get({ plain: true }))
    : "Not found";
}

//getUsers().then((users) => console.log(users));

//Get one user by id with his lists. My solution: shows all the contents instead of [Object]
async function getUserByPk(key) {
  const userPk = await user.findByPk(key, {
    include: { model: todoList, attributes: ["name"] },
  });
  return userPk ? userPk.get({ plain: true }) : "Not found";
}
//getUserByPk(3).then((us) => console.log(us));

//Teacher's solution, shows also created and updatedAt
async function getUserWithList(id) {
  const result = await user.findByPk(id, { include: [todoList] });
  return result.get({ plain: true });
}
//getUserWithList(3).then((u) => console.log(u));

// Get important TodoItems with the name of the list they belong to.
/*async function importantItems() {
  const importants = await todoItem.findAll({
    where: { important: true },
    include: { model: todoList, attributes: ["name"] },
  });

  return importants.map((item) => item.get({ plain: true }));
}
importantItems().then((u) => console.log(u)); */
/*async function imporantTodos() {
  const todos = await todoItem.findAll({
    where: { important: true },
    include: { model: todoList, attributes: ["name"] },
  });
  return todos.map((item) => item.get({ plain: true }));
}

//imporantTodos().then((items) => console.log("important todoItems", items));*/

//Get one user by id with his lists, which also contain their belonging TodoItem's task attribute.
//Doesn't show the contents
async function userById(id) {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todoList,
        attributes: ["name"],
        include: { model: todoItem, attributes: ["task"] },
      },
    ],
  });
  return result.get({ plain: true });
}
//userById(3).then((u) => console.log(u));
