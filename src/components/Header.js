import { Link } from 'react-router-dom';

const Header = ({ logo, headerData }) => {
  if (!headerData) return null;
  function closeNav() {
    const sideNav = document.getElementById("mySidenav");
    if (sideNav) {
        sideNav.style.width = "0";
    }
}


  const renderLinks = (links) => (
    links.map(link => (
      link.subLinks ? (
        <div key={link.name} className="accordion-item">
          <h2 className="accordion-header" id={`heading-${link.name}`}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${link.name}`} aria-expanded="false" aria-controls={`collapse-${link.name}`}>
              {link.name}
            </button>
          </h2>
          <div id={`collapse-${link.name}`} className="accordion-collapse collapse" aria-labelledby={`heading-${link.name}`}>
            <div className="accordion-body">
              {renderLinks(link.subLinks)}
            </div>
          </div>
        </div>
      ) : (
        <a key={link.name} href={link.link} target={link.external ? '_blank' : '_self'} rel={link.external ? 'noopener noreferrer' : ''} className="cus-menuP-link">
          {link.name}
        </a>
      )
    ))
  );

  return (
    <header>
      <div>
        {logo && <img src={logo} alt="Logo" />}
      </div>
      <nav className="menuShow" id="mySidenav">
        <div className="cus-menuP">
          <div className="container">
            <div className="d-flex justify-content-end mb-3">
              <button className="p-0 btn" onClick={() => closeNav()}>
              <svg viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.63672 5.42014C3.63672 4.71133 4.21133 4.13672 4.92014 4.13672H9.62602C10.3348 4.13672 10.9094 4.71133 10.9094 5.42014V10.126C10.9094 10.8348 10.3348 11.4094 9.62602 11.4094H4.92014C4.21133 11.4094 3.63672 10.8348 3.63672 10.126V5.42014Z"
                                fill="white" />
                            <path
                                d="M12.3633 5.42014C12.3633 4.71133 12.9379 4.13672 13.6467 4.13672H18.3526C19.0614 4.13672 19.636 4.71133 19.636 5.42014V10.126C19.636 10.8348 19.0614 11.4094 18.3526 11.4094H13.6467C12.9379 11.4094 12.3633 10.8348 12.3633 10.126V5.42014Z"
                                fill="white" />
                            <path
                                d="M21.0898 5.42014C21.0898 4.71133 21.6645 4.13672 22.3733 4.13672H27.0791C27.788 4.13672 28.3626 4.71133 28.3626 5.42014V10.126C28.3626 10.8348 27.788 11.4094 27.0791 11.4094H22.3733C21.6645 11.4094 21.0898 10.8348 21.0898 10.126V5.42014Z"
                                fill="white" />
                            <path
                                d="M3.63672 14.1477C3.63672 13.4389 4.21133 12.8643 4.92014 12.8643H9.62602C10.3348 12.8643 10.9094 13.4389 10.9094 14.1477V18.8536C10.9094 19.5624 10.3348 20.137 9.62602 20.137H4.92014C4.21133 20.137 3.63672 19.5624 3.63672 18.8536V14.1477Z"
                                fill="white" />
                            <path
                                d="M12.3633 14.1477C12.3633 13.4389 12.9379 12.8643 13.6467 12.8643H18.3526C19.0614 12.8643 19.636 13.4389 19.636 14.1477V18.8536C19.636 19.5624 19.0614 20.137 18.3526 20.137H13.6467C12.9379 20.137 12.3633 19.5624 12.3633 18.8536V14.1477Z"
                                fill="white" />
                            <path
                                d="M21.0898 14.1477C21.0898 13.4389 21.6645 12.8643 22.3733 12.8643H27.0791C27.788 12.8643 28.3626 13.4389 28.3626 14.1477V18.8536C28.3626 19.5624 27.788 20.137 27.0791 20.137H22.3733C21.6645 20.137 21.0898 19.5624 21.0898 18.8536V14.1477Z"
                                fill="white" />
                            <path
                                d="M3.63672 22.8742C3.63672 22.1654 4.21133 21.5908 4.92014 21.5908H9.62602C10.3348 21.5908 10.9094 22.1654 10.9094 22.8742V27.5801C10.9094 28.2889 10.3348 28.8635 9.62602 28.8635H4.92014C4.21133 28.8635 3.63672 28.2889 3.63672 27.5801V22.8742Z"
                                fill="white" />
                            <path
                                d="M12.3633 22.8742C12.3633 22.1654 12.9379 21.5908 13.6467 21.5908H18.3526C19.0614 21.5908 19.636 22.1654 19.636 22.8742V27.5801C19.636 28.2889 19.0614 28.8635 18.3526 28.8635H13.6467C12.9379 28.8635 12.3633 28.2889 12.3633 27.5801V22.8742Z"
                                fill="white" />
                            <path
                                d="M21.0898 22.8742C21.0898 22.1654 21.6645 21.5908 22.3733 21.5908H27.0791C27.788 21.5908 28.3626 22.1654 28.3626 22.8742V27.5801C28.3626 28.2889 27.788 28.8635 27.0791 28.8635H22.3733C21.6645 28.8635 21.0898 28.2889 21.0898 27.5801V22.8742Z"
                                fill="white" />
                        </svg>
                        <span>Menu</span>
              </button>
            </div>
            <div className="row">
              {headerData.navItems.map(item => (
                <div key={item.id} className="col-xl-2 col-lg-2 col-md-4 col-sm-12 mb-5">
                  <div className="d-flex flex-column gap-3">
                    <p className="mb-0 cus-menuP-title">{item.title}</p>
                    <div className="d-flex flex-column gap-3">
                      {renderLinks(item.links)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
