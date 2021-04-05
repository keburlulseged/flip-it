
const LoginForm = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => (
  <form onSubmit={handleSubmit} className="mt-3">
    <div className="mb-3 form-group">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        id="email"
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="mb-3 form-group">
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        id="password"
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button disabled={!email || !password} type="submit" className="btn btn-primary">
      Sumbit
    </button>
  </form>
);

export default LoginForm;
