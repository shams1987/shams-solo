import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div >
            <p>Welcome to Nibora</p>
            {(sessionUser) ? <Link to="/questions">Questions</Link> : null}
        </div>
    );
}

export default Home;
