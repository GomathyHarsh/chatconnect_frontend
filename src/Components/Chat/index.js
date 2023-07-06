import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Chat = ({socket, userName, room}) => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");

    useEffect(() => {
        socket.on('receive-message', data => {
            setMessages(list => [...list, data]); 
        })
    }, [socket])

    const sendMessage = async () => {
        if(currentMessage !== ''){
            const messageData = {
                room: room,
                author: userName,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
            }

            await socket.emit('send-message', messageData);
            setMessages((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    }

    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);
  const handleLogout = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/signout`, {userCredentials: true});
    if(response){
        removeCookie('accessToken');
        navigate('/login')
    }
}
     return (
        <div>
            <div className="chat-window">
        <div className="chat-header">
          <h3>Live Chat</h3>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messages.map((messageContent) => {
              return (
                <div
                  className="message"
                  id={userName === messageContent.author ? "you" : "other"}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{messageContent.time}</p>
                      <p id="author">{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={currentMessage}
            placeholder="Hey..."
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
      <div>
      <button onClick={handleLogout} type="button" className="btn btn-danger m-3">Logout</button>
       </div>
        </div>
    )
}

export default Chat;