var express = require("express");
var router = express.Router();
const taskSchema = require("./users");

router.get("/", (req, res) => {
  res.send("helllo world");
});

router.get("/tasks", async (req, res) => {
  try {
    const data = await taskSchema.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/addtask", async (req, res) => {
  try {
    const newTask = await taskSchema.create(req.body);
    res.json(newTask);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedTask = await taskSchema.findByIdAndDelete(req.params.id);
    res.json(deletedTask);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const updatedTask = await taskSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// request for single task

router.get('/onetask/:id', async (req, res) => {
  try {
    const data = await taskSchema.findById(req.params.id)
    res.json(data)
  } catch (error) {
    console.log(error)
  }
})


module.exports = router;
