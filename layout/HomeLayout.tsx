
import React from 'react'
import Header from '../components/HeaderComponent/Header';
import LeftBar from '../components/Home/LeftBar';

type DashboardLayoutProps = {
    children: React.ReactNode,
};

export default function HomeLayoyt({ children }: DashboardLayoutProps) {
    return (
        <>
            <Header></Header>
            <div className="home">
                <div className="home__body">
                    <LeftBar></LeftBar>
                    <>{children}</>
                </div>
            </div>

        </>
    )
}