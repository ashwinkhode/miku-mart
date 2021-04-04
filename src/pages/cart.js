import {useCart} from '../context/cartContext'

import CartItem from '../components/CartItem/CartItem'
import Button from '../components/Button/Button'

const Cart = () => {

    const fakeItem = {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        quantity: 1
    }

    const {cartState, dispatchToCart} = useCart()

    const amount = cartState.cart.reduce((acc, {price, quantity}) => {
        return acc + (price * quantity)
    }, 0)

    const totalPricePerItem = cartState.cart.reduce((acc, {price}) => {
        return acc + price
    }, 0)

    return (
        <div className='mx-auto flex flex-col lg:flex-row justify-center gap-x-4'>
            <div className="flex flex-col justify-start lg:w-2/3 mb-2 shadow-md border border-gray-100">
                <h1 className='font-bold text-2xl p-4'>My Cart ({cartState.cart.length})</h1>
                <CartItem product={fakeItem} />
                {
                    cartState.cart.map(
                        (item) => (
                            <CartItem key={item.id} product={item} />
                        ))
                }
            </div>
            <div className='my-4 lg:my-0 lg:w-1/3'>
                <div className='flex flex-col border border-gray-100 shadow-md gap-y-2 p-4'>
                    <h1 className='font-semibold text-gray-500'>PRICE DETAILS</h1>
                    <div className='flex flex-row justify-between'>
                        <span>Price ({cartState.cart.length} item(s))</span>
                        <span>${totalPricePerItem}</span>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <span>Discount</span>
                        <span>$299</span>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <span>Delivery Charges</span>
                        <span>FREE</span>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between font-bold'>
                        <span>Total Amount</span>
                        <span>$
                            {
                                amount
                            }
                        </span>
                    </div>
                    <div>
                        <Button variant='primary' fullWidth>Place Order</Button>
                    </div>
                    <p className='text-gray-500 text-xs capitalize'>Total price incl GST*</p>
                </div>
            </div>
        </div>
    )
}

export default Cart