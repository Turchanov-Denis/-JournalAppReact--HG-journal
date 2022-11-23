
import Link from 'next/link'
import UserBar from './UserBar'
import Input from './Input'
import Burger from './Burger'

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header__body">
                    <div
                        className='header__container'
                    >
                        <Burger></Burger>
                        <Link href="/">
                            <div className="header__title">H&G</div>
                        </Link>
                    </div>
                    <Input></Input>
                    <Link href="/write"><button className="header__create-button">+ Создать</button></Link>
                    <UserBar />
                </div>
            </header>
        </>
    )
}