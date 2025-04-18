import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="./src/assets/img/logo.png" alt="Logo localExpress" />
      </div>
      <h1 className="header__title"> 
        <strong>LocalExpress</strong>  
        <span className="header__subtitle">Vos courses livrées avec le sourire</span>
      </h1>
    </header>
  )
}