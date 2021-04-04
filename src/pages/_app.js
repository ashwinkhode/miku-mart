import Header from '../components/Header/Header'
import {CartProvider} from '../context/cartContext'
import '../styles/global.css'

// Todo: Add bg-gray-50 to the parent div

function MyApp({Component, pageProps}) {
  return (
    <CartProvider>
      <div className='w-full'>
        <Header />
        <div className="md:pt-4 sm:px-4 overflow-hidden">
          <Component {...pageProps} />
        </div>
      </div>
    </CartProvider>
  )
}

export default MyApp
