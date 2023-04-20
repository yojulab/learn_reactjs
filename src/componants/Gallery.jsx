function Profile() {
    const avatar = 'https://i.imgur.com/yXOvdOSs.jpg';
    const description = 'Hedy Lamarr';
    return (
        <>
            <img
                src={avatar}
                alt={description}
                className="photo"
            />
        </>
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}
