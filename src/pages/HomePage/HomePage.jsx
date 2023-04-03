import { useCallback } from "react";
import UsersList from "../../components/UsersList/UsersList";
import data from "../../data";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const { users } = data;

    const handleOnItemclick = useCallback((user) => {
        navigate(`/details/${user.id}`);    
    }, []);

    return (
        <div className="page-wrapper">
            <UsersList users={users} onItemClick={handleOnItemclick} />
        </div>
    )

};

export default HomePage;