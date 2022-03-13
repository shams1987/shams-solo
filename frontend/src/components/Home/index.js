import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div class="home">
            <div class="banner"><h1>Welcome to Nibora</h1></div>
            <div class="splash-questions" >{(sessionUser) ? <Link to="/questions">Questions</Link> : null}</div>
            <div class="splash-img"></div>
        </div>
    );
}

export default Home;
