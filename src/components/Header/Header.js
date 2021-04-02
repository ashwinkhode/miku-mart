import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'
import Badge from '../Badge/Badge'

import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'

const Header = () => {
    return (
        <div className="flex flex-row justify-between w-full p-2 shadow-md">
            <Link href='/'>
                <a className='justify-center items-center flex'>
                    <Image
                        src='/favicon.ico'
                        alt='Miku Mart'
                        height='50'
                        width='50'
                    />
                    <span className='text-lg font-bold px-2 hidden sm:block'>Miku Mart</span>
                </a>
            </Link>

            <Searchbar />

            <div className="flex items-center">
                <Button>
                    LOGIN
                </Button>

                <Button>
                    <Badge query='3' />
                    <AiOutlineShoppingCart className='text-lg sm:text-2xl' />
                </Button>

                <Button>
                    <Badge query='1' />
                    <AiOutlineHeart className='text-lg sm:text-2xl' />
                </Button>

            </div>

        </div>
    )
}

export default Header