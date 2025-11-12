import Chat from './components/Chat/Chat';
import Entry from './components/Entry/Entry';

export default function App() {
    return (
        <div className='wrapper'>
            <main>
                <Chat />
                <Entry />
            </main>
        </div>
    );
}
