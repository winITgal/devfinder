import { ProfileInfoProps } from '@/interfaces'
import React from 'react'
import ProfilePictureSide from './ProfilePictureSide'

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile }) => {
    return (
        <div>
            <div className='flex gap-5 lg:flex-col'>
                <div className='lg:hidden'>
                    <ProfilePictureSide />
                </div>
                <div>
                    <div className='flex flex-col lg:flex-row h-full justify-between lg:items-center lg:gap-5'>
                        <h2 className='font-bold text-lg lg:text-2xl'>{profile.name}</h2>
                        <span className='text-[#0079FF] lg:hidden block'>@{profile.userName}</span>
                        {profile.date_joined && <span className='block'>{profile.date_joined}</span>}
                    </div>
                    <span className='text-[#0079FF] hidden lg:block'>@{profile.userName}</span>
                </div>
            </div>
            <div className='flex flex-col my-2 lg:my-5'>
                <div className='hidden lg:block lg:max-h-32 lg:max-w-96 lg:overflow-auto'>
                    {profile.bio
                        ?
                        <p>{profile.bio}</p>
                        :
                        <span>This profile has no bio</span>}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
