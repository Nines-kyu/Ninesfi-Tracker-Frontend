import React from 'react';
import './Navigation.css'
import photo from '../../assets/Navi_Rosca.jpg'

const Navigation: React.FC = () => {
    return (
        <div className='flex flex-col items-center justify-center p-3'>
            <div className='profile-avatar w-40 h-40 rounded-full overflow-hidden border-4 border-custom-orange shadow-[0_0_9px_#FF914D]'>
                <img 
                    src={photo}
                    alt="Profile Image"
                    className='profile-image' 
                 />
            </div>
        </div>
    );
};

export default Navigation;