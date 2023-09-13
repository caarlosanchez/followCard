import { useState, useEffect } from 'react';
import TwitterFollowCard from './TwitterFollowCard';
import './App.css';

const users = [
    {
        userName: 'midudev',
        name: 'miguel',
        initialIsFollowing: true,
    },
    {
        userName: 'juancho',
        name: 'juna',
        initialIsFollowing: false,
    },
    {
        userName: 'carlosanc',
        name: 'carlos',
        initialIsFollowing: true,
    },
    {
        userName: 'pepitogrillo',
        name: 'pepe',
        initialIsFollowing: true,
    },
    {
        userName: 'joaquinfernandez',
        name: 'joaquin',
        initialIsFollowing: false,
    },
];

function App() {
    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const formatUserName = (userName) => `@${userName}`;

    useEffect(() => {
        const handleMove = (event) => {
            const { clientX, clientY } = event;
            setPosition({ x: clientX, y: clientY });
        };

        if (enabled) {
            window.addEventListener('pointermove', handleMove);
        }

        return () => {
            window.removeEventListener('pointermove', handleMove);
        };
    }, [enabled]);
    return (
        <>
            <div className='cards'>
                {users.map(({ userName, name, initialIsFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={formatUserName(userName)}
                        initialIsFollowing={initialIsFollowing}
                        name={name}
                    ></TwitterFollowCard>
                ))}
            </div>
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    opacity: '0.8',
                    pointerEvents: 'none',
                    left: -20,
                    top: -20,
                    width: 40,
                    height: 40,
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            ></div>
            <div className='tw-follow-mouse'>
                <button onClick={() => setEnabled(!enabled)}>
                    {enabled ? 'desactivar' : 'activar'}
                </button>
            </div>
        </>
    );
}

export default App;
