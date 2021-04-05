const RegisterForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => (
  <form onSubmit={handleSubmit} className="mt-3">
    <div className="mb-3 form-group">
      <label htmlFor="name" className="form-label">
        Your name
      </label>
      <input
        id="name"
        type="text"
        className="form-control"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

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
    <button type="submit" className="btn btn-primary">
      Sumbit
    </button>
  </form>
);

export default RegisterForm;
