const HeaderComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark ">
        <a className="navbar-brand mx-3 text-white">Manager App</a>
        <form className="form-inline ml-auto mx-3">
          <div className="input-group ">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append mx-1">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </nav>
    </div>
  );
};

export default HeaderComponent;
