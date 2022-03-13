import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className="home">
            <div className="banner"><h1>Welcome to Nibora</h1></div>
            <div className="splash-img"></div>
        </div>
    );
}

export default Home;
