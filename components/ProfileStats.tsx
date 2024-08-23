import { ProfileInfoProps } from '@/interfaces'
import React from 'react'

const ProfileStats: React.FC<ProfileInfoProps> = ({ profile }) => {
    return (
        <div className='shadow-xl rounded-xl bg-[#F6F8FF] dark:bg-[#141D2F] p-2 md:p-5 flex justify-between'>
            <div>
                <h3 className='text-[#4B6A9B] dark:text-white text-xs lg:text-lg'>Repos</h3>
                <span className='lg:text-3xl font-bold'>{profile.numberOfRepos}</span>
            </div>
            <div>
                <h3 className='text-[#4B6A9B] dark:text-white text-xs lg:text-lg'>Followers</h3>
                <span className='lg:text-3xl font-bold'>{profile.numberOfFollowers}</span>
            </div>
            <div>
                <h3 className='text-[#4B6A9B] dark:text-white text-xs lg:text-lg'>Following</h3>
                <span className='lg:text-3xl font-bold'>{profile.numberOfFollowing}</span>
            </div>
        </div>
    )
}

export default ProfileStats
