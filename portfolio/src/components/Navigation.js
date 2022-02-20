import DropDown from './dropDown'
import content from '../content'


const mobileNav = () => {
    return (
        <div className='shadow-sm'>
            <div className='flex justify-between items-center text-md w-5/6 mx-auto  font-extrabold text-blue-400 '>
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