import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_STUDENT } from '../utils/mutations';
import { useHistory } from 'react-router-dom';

function SignupPage(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addStudent] = useMutation(ADD_STUDENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addStudent({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        openEmploy: formState.openEmploy,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);

    const history = useHistory();
    history.push('/profile');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
      
  return (
    <div className="container my-1">

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div class="form-input">
          <label htmlFor="firstName">First Name:</label>
          <input placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Looking For Work</label>
          <input
            placeholder="Select an Option"
            name="work"
            type="list"
            list="options"
            id="work"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Looking For Collaboration</label>
          <input
            placeholder="Select an Option"
            name="collab"
            type="list"
            list="options"
            id="collab"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="linkedin">LinkedIn Profile: </label>
          <input
            placeholder="Enter LinkedIn Profile URL"
            name="LinkedIn"
            type="text"
            id="LinkedIn"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="github">GitHub Profile: </label>
          <input
            placeholder="Enter GitHub Profile URL"
            name="GitHub"
            type="text"
            id="GitHub"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      <datalist id="options">
        <option value="Yes"></option>
        <option value="No"></option>
        </datalist> 
    </div>
  );
}

export default SignupPage;