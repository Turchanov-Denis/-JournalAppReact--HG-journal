import Link from 'next/link'
import Image from 'next/image'
import comment from './actionBarImage/comment.png'
import arrow from './actionBarImage/arrow.png'
import mark from './actionBarImage/mark.png'
import share from './actionBarImage/share.png'
interface ArticleProps {
    userName: string,
    title: string,
    subtitle: string,
    count: number,
    id: number
}

export default function Article({ userName, title, subtitle, count, id }: ArticleProps) {

    return (
        <>
            <article className="article">
                <div className="article__content">
                    {/* <!-- header --> */}
                    <Link href="'/article/' + id">
                        <div className="article-header">
                            <img
                                className="article-header__user-icon"

                                src={require("../HeaderComponent/UserBarImage/avatar.png").default.src}
                            />
                            <div className="article-header__user-name">{userName}</div>
                        </div>
                        {/* <!-- title --> */}
                        <div className="article__title">{title}</div>
                        <div className="article__subtitle">{subtitle}</div>

                        {/* <!-- main image --> */}
                        <img className="article__image" src={require("./article.png").default.src} />
                    </Link>
                    {/* <!-- action bar --> */}
                    <div className="action-bar">
                        <div className="action-bar__column" style={{
                            width: '320px'
                        }}>
                            <button className="action-bar__icon">
                                <Image src={comment} alt="favorites" />
                            </button>

                            <button className="action-bar__icon">
                                <Image src={mark} alt="favorites" />
                            </button>

                            <button className="action-bar__icon">
                                <Image src={share} alt="favorites" />
                            </button>
                        </div>
                        <div className="action-bar__column">
                            <button className="action-bar__icon" >
                                <Image
                                    src={arrow}
                                    alt="favorites"

                                />
                            </button>
                            <div className="action-bar__count">{count}</div>
                            <button className="action-bar__icon action-bar__icon_mark" >
                                <Image
                                    src={arrow}
                                    alt="favorites"
                                />
                            </button>
                        </div>
                    </div>
                </div >
            </article >
        </>
    )
}