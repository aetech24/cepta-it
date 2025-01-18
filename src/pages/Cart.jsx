import React from 'react'

const Cart = () => {
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            <div className="max-w-4xl">
                <div className="border rounded p-4 mb-4">
                    <p className="text-lg">Your cart is empty</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Continue Shopping</button>
            </div>
        </main>
    )
}

export default Cart