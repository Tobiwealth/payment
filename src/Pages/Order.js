import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Order.css';

function Order () {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [address, setAddress] = useState('');
	const [quantity, setQuantity] = useState('');
	const [orderId, setOrderId] =useState('');
	const [ipAddress, setIpAddress] = useState('');
	const [currency, setCurrency] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [cvv, setCvv] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('');
	const [amount, setAmount] = useState('');
	const [city, setCity] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [country, setCountry] = useState('');
	const [state, setState] = useState('');
	const navigate = useNavigate();

	const onFirstNameChange = (event) => {
		setFirstName(event.target.value);
		console.log(firstName);
	}
	const onLastNameChange = (event) => {
		setLastName(event.target.value);
		console.log(lastName);
	}
	const onEmailChange = (event) => {
		setEmail(event.target.value);
		console.log(email);
	}
	const onNumberChange = (event) => {
		setPhoneNumber(event.target.value);
		console.log(phoneNumber);
	}
	const onAddressChange = (event) => {
		setAddress(event.target.value);
		console.log(address);
	}
	const onOrderChange = (event) => {
		setOrderId(event.target.value);
		console.log(orderId);
	}
	const onQuantityChange = (event) => {
		setQuantity(event.target.value);
		console.log(quantity);
	}
	const onIpChange = (event) => {
		setIpAddress(event.target.value);
		console.log(ipAddress);
	}
	const onCurrencyChange = (event) => {
		setCurrency(event.target.value);
		console.log(currency);
	}
	const onCardNumberChange = (event) => {
		setCardNumber(event.target.value);
		console.log(cardNumber);
	}
	const onCvvChange = (event) => {
		setCvv(event.target.value);
		console.log(cvv);
	}
	const onPayChange = (event) => {
		setPaymentMethod(event.target.value);
		console.log(paymentMethod);
	}
	const onAmountChange = (event) => {
		setAmount(event.target.value);
		console.log(amount);
	}
	const onZipCodeChange = (event) => {
		setZipCode(event.target.value);
		console.log(zipCode);
	}
	const onCityChange = (event) => {
		setCity(event.target.value);
		console.log(city);
	}
	const onCountryChange = (event) => {
		setCountry(event.target.value);
		console.log(country);
	}
	const onStateChange = (event) => {
		setState(event.target.value);
	}

	const onSubmit = () => {
		fetch('######',{
			method: 'post',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({
				'ip': ipAddress,
				'order': {
					'order_id': orderId, 
					'currency': currency,
					'amount': amount,
					'quantity': quantity, 
					'paymentMethod': paymentMethod
	            },
	            'card': {
		            'number': cardNumber,
		            'cvv': cvv
	            },
	            'billing': {
					'firstName': firstName,
					'lastName': lastName,
					'email': email,
					'phone': phoneNumber,
					'address': address,
					'city': city,
					'state': state,
					'postcode': zipCode,
					'country': country
				},
				'shipping': {
					'address': address,
					'city'   : city,
					'state'  : state,
					'postcode': zipCode,
					'country': country
				}
			})
		})
		    .then(response => response.json())
		    .then(data =>{
		    	if(data==='accept'){
		    		return(navigate("/accept"));
		    	}else if(data ==='reject'){
		    		return(navigate("/reject"));
		    	}
		    })
	}
	
  
	return (
		<div className='order_container'>
			<h1>Customer's Information</h1>
			<div className='first form'>
			    <div>
			        <label htmlFor="ipaddress">IP Address</label>
			        <input onChange={onIpChange} type="text" name="ipaddress" placeholder="IP Address" id="ipaddress" />
			        <a href="https://www.google.com/search?q=my+ip+address" target="_blank" rel="noopener noreferrer" >
			            <button className='form-btn reduce'>Get your IP Address</button>
			        </a>
			    </div>
			    <div>
			    	<label htmlFor="name">First Name</label>
			    	<input onChange={onFirstNameChange} type="text" name="firstname" placeholder="John" id="firstname" />
			    </div>
			    <div>
			    	<label htmlFor="name">Last Name</label>
			    	<input onChange={onLastNameChange} type="text" name="lastname" placeholder="Doe" id="lastname" />
			    </div>
			    <div>
			    	<label htmlFor="email">Email</label>
			    	<input onChange={onEmailChange} type="email" name="email" placeholder="Johndoe@gmail.com" id="email" />
			    </div>
			    <div>
			    	<label className='phone' htmlFor="phonenumber">Phone Number</label>
			    	<input onChange={onNumberChange} type="tel" name="phonenumber" placeholder="+234" id="phonenumber" />
			    </div>
			    <div>
			    	<label htmlFor="address">Address</label>
			    	<input onChange={onAddressChange} type="text" name="address" placeholder="Home Address" id="address" />
			    </div>
			    <div>
			    	<label htmlFor="address">Zip Code</label>
			    	<input onChange={onZipCodeChange} type="text" name="zipcode" placeholder="zip code" id="zip code" />
			    </div>
			    <div>
			    	<label htmlFor="city">City</label>
			    	<input onChange={onCityChange} type="text" name="city" placeholder="city" id="city" />
			    </div>
			    <div>
			    	<label htmlFor="city">State</label>
			    	<input onChange={onStateChange} type="text" name="state" placeholder="state" id="state" />
			    </div>
			    <div>
			    	<label htmlFor="country">Country</label>
			    	<input onChange={onCountryChange} type="text" name="country" placeholder="country" id="country" />
			    </div>
			    <div>
			    	<label htmlFor="orderid">Order ID</label>
			    	<input onChange={onOrderChange} type="text" name="orderid" placeholder="ID number" id="orderid" />
			    </div>
			    <div>
			    	<label htmlFor="quantity">Quantity</label>
			    	<input onChange={onQuantityChange} type="text" name="quantity" placeholder="Quantity bought" id="quantity" />
			    </div>
			    <div>
			    	<label htmlFor="currency">Currency</label>
			    	<input onChange={onCurrencyChange} type="text" name="currency" placeholder="USD" id="currency" />
			    </div>
			</div>
			<div className='second form'>
				<h1>Card details</h1>
				<div>
					<div>
				    	<label htmlFor="cardnumber">Card 12 digit pin</label>
				    	<input onChange={onCardNumberChange} type="text" name="cardnumber" placeholder="xxxxxxxxxxx" id="cardnumber" />
			        </div>
			        <div>
				    	<label htmlFor="bankname">CVV</label>
				    	<input onChange={onCvvChange} type="text" name="cvv" placeholder="cvv" id="cvv" />
			        </div>
			        <div>
				    	<label htmlFor="pay">Payment Mehod</label>
				    	<select name="pay" id="pay" onChange={onPayChange}>
				    		<option name='creditcard' value="creditcard">Credit Card</option>
				    		<option name='paypal' value="paypal">Paypal</option>
				    		<option name='bitcoin' value="bitcoin">Bitcoin</option>
				    		<option name='amazonpay' value="amazonpay">Amazon Pay</option>
				    		<option name='giftcard' value="giftcard">Gift Card</option>
				    	</select>
			        </div>
			        <div>
				    	<label htmlFor="amount">Amount</label>
				    	<input onChange={onAmountChange} type="text" name="amount" placeholder="1234" id="amount" />
			        </div>
				</div>
			</div>
			<div className='form__btn-wrapper'>
				<button onClick={onSubmit} className='form-btn'>Verify Information</button>
			</div>
		</div>
	);
    
}

export default Order;