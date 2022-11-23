import ArticleTool from "./ArticleTool";
import Subscribers from "./Subscribers";

export default function UserDescription() {
    return (
        <>
            <div className="user-content">
                <div className="user-description">
                    <img
                        src="../HeaderComponent/UserBarImage/avatar.png"
                        className="user-description__icon"
                    />
                    <div className="user-description__name">Rafu</div>
                    <a href="#" className="user-description__edit">Редактировать</a>
                    <div className="user-state">
                        <div className="user-state__subscribers">+6 1 подписчик</div>
                        <div className="user-state__time">На проекте с 14 июл 2022</div>
                    </div>
                    <div className="tabs">
                        <button className="tab">Статьи</button>
                        <button className="tab">Комментарии</button>
                        <button className="tab">Черновики</button>
                    </div>
                </div>
                <div
                    
                >
                    <ArticleTool></ArticleTool> <Subscribers></Subscribers>
                </div>
            </div></>
    )
}