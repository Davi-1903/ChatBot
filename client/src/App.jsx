import { useState } from 'react';
import Chat from './components/Chat/Chat';
import Entry from './components/Entry/Entry';

export default function App() {
    const [messages, setMessages] = useState([]);

    function addMessage(message) {
        const newMessage = {
            id: messages.length + 1,
            type: 'ask',
            text: message,
        };
        setMessages([...messages, newMessage]);
        fetchBotResponse(message, messages.length + 1);
    }

    async function fetchBotResponse(message, botResponseId) {
        try {
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (response.status !== 200) {
                throw new Error('Non-200 response');
            }

            const data = await response.json();
            setMessages(prevMessages => [
                ...prevMessages,
                {
                    id: botResponseId,
                    type: 'answer',
                    text: data.text,
                },
            ]);
        } catch (error) {
            console.error('Error fetching response:', error);
            alert('Sorry, something went wrong.');
        }
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
