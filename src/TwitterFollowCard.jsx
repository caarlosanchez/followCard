import { useState } from 'react';

function TwitterFollowCard({ userName, name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button isFollow'
        : 'tw-followCard-button';

    const handleCLick = () => {
        setIsFollowing(!isFollowing);
    };
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt='avatar'
                />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>
                        {userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleCLick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>
                        Dejar de seguir
                    </span>
                </button>
            </aside>
        </article>
    );
}

export default TwitterFollowCard;
