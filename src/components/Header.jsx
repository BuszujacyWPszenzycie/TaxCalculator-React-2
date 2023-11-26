import picture from '../img/tax_image_2-removebg-preview.png'

export default function Header({ children }) {
	return (
		<header className='header'>
			<img src={picture} className='header__picture'></img>
		</header>
	)
}
