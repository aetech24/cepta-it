import React from 'react'

const Checkout = () => {
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            <form className="max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <input type="text" placeholder="First Name" className="p-2 border rounded" />
                    <input type="text" placeholder="Last Name" className="p-2 border rounded" />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Place Order</button>
            </form>
        </main>
    )
}

export default Checkout