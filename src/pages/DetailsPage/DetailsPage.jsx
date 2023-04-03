import { useParams } from "react-router-dom";
import data from "../../data";
import './DetailsPage.css';

const DetailsPage = () => {

    const {users} = data;

    const parameters = useParams();
    const { id: targetId } = parameters;

    const user = users.find ((user) => {
        return user.id === targetId;
    });

    return (
        <div className="page-wrapper">
            {user ? (
                <>
                    <div className="details-page-image-container">
                    <img className="details-page-image" src={user.image.src} alt={user.image.alt} />
                    </div>
                    <h2>{user.name}</h2>
                    <p>{user.description}</p>
                </>
            ) : (
                <p>Usuário não encontrado</p>
            )}
            <Link to="/">Voltar</Link>
        </div>
    )

};

export default DetailsPage;