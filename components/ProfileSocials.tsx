import { ProfileInfoProps } from '@/interfaces'
import Link from 'next/link'
import React from 'react'
import { FaLink, FaTwitter } from 'react-icons/fa'
import { GoOrganization } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5'

const ProfileSocials: React.FC<ProfileInfoProps> = ({ profile }) => {
    return (
        <div className="flex flex-col gap-y-2 mt-2 md:grid md:grid-cols-2 md:gap-x-5 md:mt-5 text-[#4B6A9B] dark:text-white">
            <div className="flex items-center gap-2 place-self-start">
                <IoLocationSharp />
                <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
                {
                    profile.twitterUrl
                        ?
                        <>
                            <FaTwitter />
                            <span>{profile.twitterUrl}</span>
                        </>
                        :
                        <>
                            <FaTwitter />
                            <span>Not Available</span>
                        </>
                }
            </div>
            <Link href={profile.githubUrl} className="flex items-center gap-2 place-self-start">
                <FaLink />
                <span>
                    {profile.githubUrl}
                </span>
            </Link>
            <div className="flex items-center gap-2">
                <GoOrganization />
                <span>@{profile.githubOrganization}</span>
            </div>
        </div>
    )
}

export default ProfileSocials
