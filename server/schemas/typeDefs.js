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
  }

  type Mutation {
  }
`;

module.exports = typeDefs;
