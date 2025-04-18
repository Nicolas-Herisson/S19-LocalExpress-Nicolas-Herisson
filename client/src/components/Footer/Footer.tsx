import './Footer.scss'

export default function Footer() {
    return (
      <footer className="footer">
    
        
        <div className="logo">
          <a href="#">
            <img src="./src/assets/img/logo.png" alt="Logo localExpress" />
            <div className="return-to-top">Retour en haut</div>
          </a>
        </div>
  
        <div className="nav">
          <nav>
            <ul>
              <li><a href="#">Conditions générales de vente</a></li>
              <li><a href="#">Vos informations personnelles</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </nav>
        </div>

        <p className="footer__copyright">© 2024 LocalExpress</p>
      </footer>
    )
  }
  