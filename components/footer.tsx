import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-left">
                <b>Build by </b>
                <a
                    href="https://github.com/thosangs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    thosangs
                </a>
                &copy; {currentYear}
            </div>
        </footer>
    );
};

export default Footer;
