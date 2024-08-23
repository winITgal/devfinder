import React from 'react'
import DefaultProfilePicture from '/public/img/user-pfp.png'
import Image from 'next/image';


const ProfilePictureSide = () => {
    return (
        <Image
            className='rounded-full'
            src={DefaultProfilePicture}
            alt='Default profile picture'
        />
    )
}

export default ProfilePictureSide
