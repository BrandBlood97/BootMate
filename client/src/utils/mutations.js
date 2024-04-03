import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_STUDENT = gql`
  mutation addStudent(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $openEmploy: Boolean!
  ) {
    addStudent(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      openEmploy: $openEmploy
    ) {
      token
      user {
        _id
      }
    }
  }
`;