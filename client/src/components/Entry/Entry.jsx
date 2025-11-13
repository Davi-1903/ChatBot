import { useState } from 'react';
import { IconSend2 } from '@tabler/icons-react';
import './Entry.css';

export default function Entry({ addMessage }) {
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const message = event.target.elements.entry.value;
        addMessage(message);
        setMessage('');
    }

    return (
        <form onSubmit={handleSubmit} className='entry-container'>
            <input
                id='entry'
                type='text'
                placeholder='Type your message here...'
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button id='send-button' disabled={!message.trim()}>
                <IconSend2 size={32} />
            </button>
        </form>
    );
}
