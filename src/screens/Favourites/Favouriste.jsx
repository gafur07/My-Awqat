import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Heading from '../../components/Heading/Heading'
import { removeToCart } from '../../store/reducers/cartSlice'
import Swal from 'sweetalert2'

const Favouriste = () => {
    const { basket } = useSelector(store => store.cart)
    const dispatch = useDispatch()

    function removeCart(idMeal) {
        dispatch(removeToCart(idMeal))
      Swal.fire({
        icon: "info",
        title: "Removed",
        text: "Meal Removed From Favourites"
      })
    }

  return (
    <>
    <Heading>
      <h1> Your favourite <span className='text-orange-500'>meals</span> </h1>
      </Heading>
    <div className='container mx-auto'>
        {basket.length === 0 && (
          <img className='w-[50%] mx-auto' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" />
        )}
        <div className='row py-12'>
          {basket.map(item => (
            <div className="item">
              <Link to={`/meal/${item.idMeal}`}>
                <img src={item.strMealThumb} />
              </Link>
              <div className="item__body">
                <h2>{item.strMeal}</h2>
                <button onClick={() => removeCart(item.idMeal)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default Favouriste