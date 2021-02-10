import React from 'react';
import Header from 'components/Header';
import PaginaHome from 'components/PaginaHome';
import Footer from 'components/Footer';

function App() {
    React.useEffect(() => {
        const bootsJS = document.createElement('script');
        bootsJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js';
        document.body.appendChild(bootsJS);
    }, [])

    return (
        <div className="container-fluid p-0">
            <Header />
            <PaginaHome />
            <Footer />
        </div>
    );
}

export default App;
