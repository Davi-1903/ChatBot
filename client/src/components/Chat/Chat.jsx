import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Chat.css';

export default function Chat({ messages }) {
    return (
        <div className='chat-container'>
            {messages.map(msg => (
                <div key={msg.id} className={msg.type}>
                    {msg.type === 'answer' ? (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                    ) : (
                        <span>{msg.text}</span>
                    )}
                </div>
            ))}
        </div>
    );
}
