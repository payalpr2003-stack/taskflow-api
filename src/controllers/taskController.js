let tasks = [];
let currentId = 1;

// Get All Tasks
export const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

// Get Single Task
export const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({
      error: 'Task not found'
    });
  }

  res.status(200).json(task);
};

// Create Task
export const createTask = (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === '') {
    return res.status(400).json({
      error: 'Task text is required'
    });
  }

  const newTask = {
    id: currentId++,
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

// Update Task
export const updateTask = (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({
      error: 'Task not found'
    });
  }

  const { text, completed } = req.body;

  if (text !== undefined) {
    task.text = text;
  }

  if (completed !== undefined) {
    task.completed = completed;
  }

  res.status(200).json(task);
};

// Delete Task
export const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      error: 'Task not found'
    });
  }

  tasks.splice(taskIndex, 1);

  res.status(204).end();
};