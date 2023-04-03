import { useCallback, useMemo } from "react";
import './UsersList.css';

const UsersList = ({users = [], onItemClick}) => {
    const handleItemclick = useCallback((user) => {
        onItemClick && onItemClick(user);
    }, [onItemClick])

    const usersMap = useMemo(() => {
        return users.map ((user) => {
            return (
                <li key={user.id}>
                    <button onClick={() => handleItemclick (user)}>{user.name}</button>
                </li>
            )
        });
        
    }, [users]);

    return (
        <div>
            {users.length > 0 ? (
                <ul className="users-list">
                    {usersMap}
                </ul>
            ) : (
                <p>Nenhum usuário cadastrado</p>
            )}
        </div>
    )
}

export default UsersList;





