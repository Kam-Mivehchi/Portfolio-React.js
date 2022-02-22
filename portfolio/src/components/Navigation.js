import DropDown from './dropDown'
import content from '../content'


const mobileNav = (props) => {
    return (
        <div className={props.divbg}>
            <div className={`flex justify-between items-center text-md w-5/6 mx-auto  font-extrabold  + ${props.textColor}`}>
                <h1 className='text-3xl ' >{content.nav.logoSmall}</h1>
                {/* <div className=''>
                    {content.nav.links.map((link, index) => {
                        return <span className='mx-1 text-lg'>{link.text}</span>
                    })}
                </div> */}
                <DropDown />
            </div>

        </div>
    )
}

export default mobileNav;