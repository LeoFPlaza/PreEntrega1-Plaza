export const CartList = () => {

    return (
        <div className='Cart__Container'>

            <div class="relative flex pb-4 items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink mx-4 text-gray-400">
                    <h3 className='Cart__Title'>Productos</h3>

                </span>
                <div class="flex-grow border-t border-gray-400"></div>
            </div>

            <div>
                <ul className='Cart__List'>
                    <li className='Cart__item'>item del carrito 1</li>
                    <li className='Cart__item'>item del carrito 2</li>
                    <li className='Cart__item'>item del carrito 3</li>
                    <li className='Cart__item'>item del carrito 4</li>
                </ul>
            </div>
        </div>
    )
}
