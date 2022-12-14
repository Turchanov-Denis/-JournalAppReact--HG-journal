export default function ArticleTool() {
    return (
        <>
            <div className="article-tool">
                <div className="article-tool__column"><button className="user-bar__icon user-bar__icon_avatar">
                    <img src={require("../HeaderComponent/UserBarImage/avatar.png").default.src} alt="favorites" />
                </button>
                    <button  className="article-tool__create-button">Новая запись</button></div>
                <div className="article-tool__column">
                    <button className="article-tool__note-button">Фото и видео</button>
                    <button className="article-tool__note-button" >Ссылки</button>
                </div>
            </div>
        </>
    )
}