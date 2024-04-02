export default function LoginPage() {
    return (
    <section id="login-page">
        <form>
            <h1>Login</h1>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
            <button class="btn" type="submit">Login</button>
        </form>
    </section>
  );
}