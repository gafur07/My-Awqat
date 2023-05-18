import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/reducers/cartSlice'
import {
	fetchedSearch,
	fetchingErrorSearch,
	fetchingSearch,
} from '../../store/reducers/searchSlice'

const Search = () => {
	const [input, setInput] = useState('')
	const { search, loadingSearch } = useSelector(store => store.search)
	const { basket } = useSelector(store => store.cart)
	const dispatch = useDispatch()

	function addCart(meal) {
		dispatch(addToCart(meal))
	}

	function SearchSubmit(e) {
		dispatch(fetchingSearch())
		e.preventDefault()
		if (input.length > 0) {
			axios
				.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
				.then(res => {
					dispatch(fetchedSearch(res.data.meals))
					if (!res.data.meals) {
						dispatch(fetchingErrorSearch())
					}
				})
		}
		setInput('')
	}

	return (
		<>
			<div className='heading'>
				<form className='w-[50%] mx-auto' onSubmit={SearchSubmit}>
					<input
						className='border-2 border-[rgba(0,0,0,0.07)] text-[#130f40] outline-none px-4 py-2 w-full mx-auto'
						placeholder='Search Meals by Category'
						type='search'
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
				</form>
			</div>

			<div className='container mx-auto'>
				{search?.length === 0 && (
					<img
						className='w-[50%] mx-auto'
						src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png'
					/>
				)}
				<div className='row py-12'>
					{search ? (
						search?.map(item => (
							<div className='item'>
								<Link to={`/meal/${item.idMeal}`}>
									<img src={item.strMealThumb} />
								</Link>
								<div className='item__body'>
									<h2>{item.strMeal}</h2>
									<button onClick={() => addCart(item)}>Favourite</button>
								</div>
							</div>
						))
					) : (
						<div className='w-full h-[40vh] flex justify-center items-center mx-auto'>
							<h1 className='text-slate-700 text-3xl'>Not found!</h1>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Search
