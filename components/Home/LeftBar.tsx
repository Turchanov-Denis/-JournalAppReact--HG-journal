export default function LeftBar() {
    return (
        <>
            <div className="list-bar">
                <button className="list-bar__button active">Популярное</button>
                <button className="list-bar__button">Свежее</button>
                <button className="list-bar__button">Моя лента</button>
                <button className="list-bar__button">Закладки</button>
            </div>
        </>
    )
}