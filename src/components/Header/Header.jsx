
import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between border-b-2'>
            <h1 className='text-4xl'>Knowledge Cafe</h1>
            <img src={Profile} alt="Profile image" />
        </div>
    );
};

export default Header;