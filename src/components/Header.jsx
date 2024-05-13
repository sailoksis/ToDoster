import logo from '../assets/logo.svg'

function Header () {
    return (
        <div className= 'p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0'>
<header className='flex justify-between dark:text-white items-center'>
    <div>
        <img src={logo} alt="logo" />
        <p>Text</p>
    </div>
</header>
        </div>
    )
}
export default Header