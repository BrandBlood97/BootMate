const typeDefs = `
type Student {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  openEmploy: Boolean!
  projects: [Project]
}

type Project {
  id: ID!
  name: String!
  baseLanguage: String!
  createdAt: Date!
  openCollab: Boolean!
  student: Student
}

  type Query {
    student(id: ID!, firstname: String lastname: String): Student
    students: [Student]
    project(id: ID!, name: String): Project
    projects: [Project]
    student: Student
  }

  type Mutation {
  }
`;

module.exports = typeDefs;
