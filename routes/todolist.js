const express = require("express");
const router = express.Router();

let todolist = ["ทดสอบ", "กินข้าว", "นอน"];

//View todo list
router.get("/", function (req, res, next) {
  res.status(200).json(todolist);
});

router.get("/:id", function (req, res, next) {
  const { params } = req;
  res.status(200).json(todolist[params.id]);
});

//Add todo list.
router.post("/", function (req, res, next) {
  //{
  //  "todo": ค่าที่ส่งมา
  //}
  const { body } = req;
  const todo = body.todo;
  todolist.push(todo);
  res.status(200).json({ message: "Success" });
});

//Delete todo list.
router.delete("/", function (req, res, next) {
  const { query } = req;
  todolist = todolist.filter((element) => {
    return query.todo !== element;
  });
  res.status(200).json({ message: "Success" });
});

module.exports = router;
