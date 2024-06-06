import IconIntro from './Icon-intro'

function Header() {
    return (
        <>
            <div className='header'>
                <div className='header-text'>
                    <h1>Agustina Bagnasco</h1>
                    <h4>Frontend Web Developer</h4>
                </div>

            </div>
            <div className='mt-5'>
                <IconIntro />
            </div>

        </>

    );

}

export default Header;