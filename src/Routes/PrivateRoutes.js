import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../Context/UserContext";
import JoinChat from "../Components/JoinChat";
import io from 'socket.io-client';


const socket = io.connect('http://localhost:4000');
const PrivateRoutes = ({children, ...rest}) => {
    const {user, loading} = useContext(UserContext);
    if(!user){
        return <div><JoinChat socket={socket}/></div>
    }

    return (
        user ? <Outlet /> : <Navigate to='/login' />
    )

}

export default PrivateRoutes;