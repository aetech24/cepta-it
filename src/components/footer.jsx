import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <div className="flex flex-col space-y-2">
                            <Link to="/" className="hover:text-blue-400">Home</Link>
                            <Link to="/shop" className="hover:text-blue-400">Shop</Link>
                            <Link to="/about" className="hover:text-blue-400">About</Link>
                            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <p>Email: info@example.com</p>
                        <p>Phone: (555) 123-4567</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 Your Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer