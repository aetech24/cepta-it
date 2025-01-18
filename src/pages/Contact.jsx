import React from 'react'

const Contact = () => {
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <form className="max-w-md">
                <div className="mb-4">
                    <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                    <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
            </form>
        </main>
    )
}

export default Contact