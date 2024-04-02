const { Project } = require('../models');

const resolvers = {
  Query: {
    Students: async () => {
      return Student.find();
    },
    projects: async (parent, { student, name }) => {
      const params = {};

      if (student) {
        params.student = student;
      }

      if (name) {
        params.name = name;
      }
      return Project.find(params).populate('student');
    },
    project: async (parent, { id }) => {
      return Project.findById(id).populate('student');
    },
    student: async (parent, { id, name }) => {
      const params = {};
      if (id) {
        params.id = id;
      }
      if (name) {
        params.name = name;
      }

      return Student.find(params).populate('student');
    },

  },
  Mutation: {
  },
};

module.exports = resolvers;
