import './index.scss'
import './NavBarItem/index'
import NavBarItem from './NavBarItem/index'

export default function NavBar() {

    const navbarItem = [
        {
            name: 'Tutorial',
            path: 'tutorial'
        },
        {
            name: 'Tutorial1',
            path: 'tutorial'
        },
        {
            name: 'Tutorial2',
            path: 'tutorial'
        }
    ]
    return (
        <div className="nav-bar flex">
            <div className="logo-box">
                <img src="../../assets/logo.png" className="auto-fit-img" alt="logo"></img>
            </div>
            {
                navbarItem.map((item)=>(
                    <NavBarItem key={item.name} name={item.name}></NavBarItem>
                ))
            }
        </div>
    )
}