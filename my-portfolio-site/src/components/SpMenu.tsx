const SpMenu = () => {

    let hamburgerMenu;
    let spList;

    const openMenu = () => {

        hamburgerMenu = document.querySelector('.sp-menu');
        spList = document.querySelector('.a-header');

        hamburgerMenu?.classList.toggle('active');
        spList?.classList.toggle('sp');

    }

    return (
        // hamburger menu
        <div className="sp-menu elem" onClick={openMenu}>
            <span className="elem"></span>
            <span className="elem"></span>
            <span className="elem"></span>
        </div>
    )
}

export default SpMenu;