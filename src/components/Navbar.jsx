import "/src/styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="profile">
          <img alt="" src="src/assets/profile.jpg"></img>
          <span>Gutemberg F. Dantas</span>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <a className="link" href="./#home">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="./#about">
                About
              </a>
            </li>
            <li>
              <a className="link" href="./#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="link" href="./#contact">
                Contatc
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
