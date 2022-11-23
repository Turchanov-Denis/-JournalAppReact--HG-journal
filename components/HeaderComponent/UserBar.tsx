import Link from "next/link"
import avatar from './UserBarImage/avatar.png'
import message from './UserBarImage/message.png'
import bell from './UserBarImage/bell.png'

import Image from "next/image"
export default function UserBar() {
    return (
        <>
            <div className="user-bar">
                <div className="user-bar__body">
                    <div className="user-bar__column">
                        <Link href="/messages">
                            <button className="user-bar__icon">
                                <Image src={message} alt="shopCart" /></button
                            ></Link>
                    </div>
                    <div className="user-bar__column">
                        <Link href="/notification">
                            <button className="user-bar__icon">
                                <Image src={bell} alt="favorites" />
                            </button>
                        </Link>
                    </div>
                    <div className="user-bar__column">
                        <Link href="/profile"
                        ><button className="user-bar__icon user-bar__icon_avatar">
                                <Image src={avatar} alt="favorites" /></button
                            ></Link>
                        <Link href="/home/login/gate"
                        ><div>
                                {/* <button
                                    className="user-bar__icon user-bar__icon_avatar"
                                // style="display: flex; align-items: center"
                                >
                                    <img src="./UserBarImage/user.png" alt="favorites" /> Войти
                                </button> */}
                            </div></Link>

                    </div>
                </div>
            </div>
        </>
    )
}