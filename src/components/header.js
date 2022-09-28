import logo from '../img/logo.gif';
function Header() {
    return (<>

        <nav className=' mx-auto py-4'>
            <img className='logo' src={logo} />
            <ul className='nav-ul pt-2'>
                <li className='nav-li text-secondary py-2 px-2'>Anasayfa</li>
                <li className='nav-li text-secondary py-2 px-2'>Hizmetler</li>
                <li className='nav-li text-secondary py-2 px-2'>Araç Modelleri</li>
                <li className='nav-li text-secondary py-2 px-2'>Blog</li>
                <li className='nav-li text-secondary py-2 px-2'>Lokasyonlar</li>
                <li className='nav-li text-secondary py-2 px-2'>İletişim</li>
            </ul>
        </nav>

    </>);
}

export default Header;