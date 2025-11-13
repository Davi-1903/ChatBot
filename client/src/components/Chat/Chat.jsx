import './Chat.css';

export default function Chat({ messages }) {
    return (
        <div className='chat-container'>
            {messages.map(msg => (
                <div key={msg.id} className={msg.type}>
                    <span>{msg.text}</span>
                </div>
            ))}
        </div>
    );
}
