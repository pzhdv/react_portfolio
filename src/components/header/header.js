import "./style.css";

const  Header = () => {
    return (
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my tag is<em><br/>WHQ </em>group</strong><br />
                <br />
                I'm  a
                <br />
                <em>FRONT</em>END <em>DEV</em>ELOPER
            </h1>
            <div className="header__text">
                <p>Who strive to gain new experience in WEB 3.0 development projects.</p>
            </div>
            <a href="#!" className="btn">Download CV</a>
        </div>
      </header>
    );
}
 
export default Header