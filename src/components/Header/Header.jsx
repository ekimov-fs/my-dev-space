import './Header.css'
function Header(props) {
    return (
        <>
            <header>
                <div className="menu">
                <a>Обо мне</a>
                <a>Услуги</a>
                <a>Портфолио</a>
                <a>Отзывы</a>
                </div>

                <button className='btn'>Связаться</button>

                <a href="https://t.me/javascript_tricker" target='_blank' className='icon telegram'/>
                <a href="https://t.me/javascript_tricker" target='_blank' className='icon instagram'/>

                <div className="switch">
                <div className="theme light"></div>
                </div>

            </header>
        </>
     
    );
}

export default Header;