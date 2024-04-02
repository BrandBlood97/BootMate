
export default function SignupPage() {
  return (
    <div className="container my-1">

      <h2>Signup</h2>
      <form id="right">
        <div class="form-input">
          <label htmlFor="firstName">First Name:</label>
          <input placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            // onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd-confirm">Confirm Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd-comfirm"
            // onChange={handleChange}
          />
        </div>
        </form>

        <form id="left">
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Looking For Work</label>
          <input
            placeholder="Select an Option"
            name="work"
            type="list"
            list="options"
            id="work"
            // onChange={handleChange}
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