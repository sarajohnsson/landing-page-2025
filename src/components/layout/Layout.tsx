import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-bg-base">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Navigation />
            <Footer />
        </div>
    );
}
