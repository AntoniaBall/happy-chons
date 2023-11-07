import Link from "../link";
import Logo from "../logo";

const MainTemplate = () => {
    return (
        <div className="container">
            <div><Logo text="Happy Chons" /></div>
            <div><Link text="Suivre mon poids" /></div>
        </div>
    );
};

export default MainTemplate;