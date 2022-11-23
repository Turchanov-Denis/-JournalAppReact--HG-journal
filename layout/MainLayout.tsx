
import React from 'react'
import Header from '../components/HeaderComponent/Header';

type DashboardLayoutProps = {
    children: React.ReactNode,
};

export default function HomeLayoyt({ children }: DashboardLayoutProps) {
    return (
        <>
            <Header></Header>
            <div className="home">
                <div className="home__body">
                    <>{children}</>
                </div>
            </div>

        </>
    )
}