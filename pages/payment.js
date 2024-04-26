import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';

const Payment = () => {
    const publicKey = 'pk_test_94dd5e296fe49c9e42911130fbd3e3f3ce6a1653';
    const [email, setEmail] = useState('');

    const payWithPaystack = (e) => {
        e.preventDefault();
        const paystack = new PaystackPop();
        paystack.newTransaction({
            key: publicKey,
            amount: 2000000, // Amount in kobo (₦20,000)
            email: email,
            onSuccess(transaction) {
                let message = `Payment complete! Reference: ${transaction.reference}`;
                console.log(message);
                // Handle success payment
            },
            onCancel() {
                alert("You have canceled the transaction");
            }
        });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="container flex justify-center items-center h-screen w-full">
            <div className='shadow-md border border-gray-300 rounded-2xl p-4 w-[85%] lg:w-[50%] h-[fit-content]'>
                <h1 className="text-2xl font-bold mb-4">Make Payment</h1>
                <form onSubmit={payWithPaystack}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Total amount: ₦20,000</span>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Pay Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;
