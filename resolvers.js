const Task = require("./models/Task");

const resolvers = {
  Query: {
    hello: () => "Hello World",
    getAllTasks: async () => {
      const tasks = await Task.find();
      return tasks;
    },
    async getTask(_, args) {
      const task = await Task.findById(args.id);
      return task;
    },
  },
  Mutation: {
    createTask: async (_, args) => {
      const { title, description } = args.task;
      const newTask = new Task({ title, description });
      await newTask.save();
      return newTask;
    },
    async deleteTask(_, args) {
      await Task.findByIdAndDelete(args.id);
      return "Task deleted successfully";
    },
    async updateTask(_, args) {
      const taskUpdated = await Task.findByIdAndUpdate(
        args.id,
        { $set: args.task },
        { new: true }
      );
      return taskUpdated;
    },
  },
};

module.exports = { resolvers };
