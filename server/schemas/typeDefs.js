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
  description: String!
  student: Student
}

type Auth {
  token: ID!
  student: Student
}

  type Query {
  }

  type Mutation {
    # ADD AUTH
    addStudent(firstName: String!, lastName: String!, email: String!, password: String!, openEmploy: Boolean!): Auth
    addProject(name: String!, baseLanguage: String!, openCollab: Boolean!): Student
    addProjectToStudent(projectId: ID!): Student
    removeProject(projectId: ID!): Student
    updateProject(projectId: ID!, openCollab: Boolean!, description: String! ): Project
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
