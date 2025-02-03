import React from 'react'
import Header from '../Header'

const LandingPageLayout = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="p-4 bg-primary text-primary-foreground">
                <Header />
            </header>
            {/* <main className="max-w-4xl mx-auto p-4">{children}</main>
    <footer className="p-4 text-center">© {new Date().getFullYear()} Expensio</footer> */}
        </div>
    )
}

export default LandingPageLayout
