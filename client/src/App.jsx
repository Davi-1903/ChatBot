import { useState } from 'react';
import Chat from './components/Chat/Chat';
import Entry from './components/Entry/Entry';

export default function App() {
    const [messages, setMessages] = useState([]);

    function addMessage(message) {
        const newMessage = {
            id: messages.length + 1,
            type: 'ask',
            text: message
        };
        setMessages([...messages, newMessage]);
    }

    return (
        <div className='wrapper'>
            <main>
                <Chat messages={messages} />
                <Entry addMessage={addMessage} />
            </main>
        </div>
    );
}
