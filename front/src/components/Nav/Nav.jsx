import style from './Nav.module.css';
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";


function Nav({ onSearch }) {
    return (
        <div className={style.navSearch}>
            <div className={style.navSearchDivLink}>
                <Link className={style.navSearchDivLinkLogout} to="/">
                    <button>LOGOUT</button>
                </Link>
                <Link className={style.navSearchDivLinkAbout} to="/about">
                    <button>ABOUT</button>
                </Link>
                <Link className={style.navSearchDivLinkHome} to="/home">
                    <button>HOME</button>
                </Link>
                <Link className={style.navSearchDivLinkFavorites} to="/favorites">
                    <button>FAVORITES</button>
                </Link>
            </div>
            <div className={style.navAgregar}>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    );
};

export default Nav;