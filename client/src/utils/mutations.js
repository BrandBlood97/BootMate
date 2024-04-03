import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      student {
        id
      }
    }
  }
`;

export const ADD_STUDENT = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $openEmploy: Boolean
  ) {
    addStudent(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      openEmploy: $openEmploy
    ) {
      token
      student {
        id
      }
    }
  }
`;
