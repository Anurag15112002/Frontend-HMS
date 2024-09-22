import React, { useState } from 'react';

const PaymentManagement = () => {
    const [patientName, setPatientName] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [payments, setPayments] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPayment = { patientName, amount, paymentMethod };
        setPayments([...payments, newPayment]);

        // Clear form fields
        setPatientName('');
        setAmount('');
        setPaymentMethod('cash');
    };

    return (
        <div className="container1">
            <div className='pay-form'>
            <h1>Manage Payments</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Patient Name:
                    <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Payment Method:
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                    >
                        <option value="cash">Cash</option>
                        <option value="credit_card">Credit Card</option>
                        <option value="insurance">Insurance</option>
                    </select>
                </label>

                <button type="submit">Add Payment</button>
            </form>
            </div>
            <div className='table-container'>
            <h2>Payments List</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => (
                        <tr key={index}>
                            <td>{payment.patientName}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.paymentMethod}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default PaymentManagement;
