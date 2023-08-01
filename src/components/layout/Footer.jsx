import React from 'react'

function Footer() {
    const FoooterYear = new Date().getFullYear()
    return (
        <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
            &copy; {FoooterYear}
        </footer>
    )
}

export default Footer
