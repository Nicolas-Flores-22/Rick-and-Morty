import style from './Nav.module.css';
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";


function Nav({ onSearch }) {
    return (
        <div className={style.navSearch}>
            <div className={style.navSearchDivLink}>
                <Link to="/"><button> LOGOUT </button></Link>
                <Link to="/about"><button> ABOUT </button></Link>
                <Link to="/home"><button> HOME </button></Link>
                <Link to="/favorites"><button> FAVORITES </button></Link>
            </div>
            <div >
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    );
};

export default Nav;