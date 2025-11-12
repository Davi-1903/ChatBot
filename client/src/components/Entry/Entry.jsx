import { IconSend2 } from '@tabler/icons-react';
import './Entry.css';

export default function Entry() {
    return (
        <div className='entry-container'>
            <input id='entry' type='text' placeholder='Type your message here...' />
            <button id='send-button'>
                <IconSend2 size={32}/>
            </button>
        </div>
    );
}
