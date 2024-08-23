export interface Profile {
    name: string;
    date_joined?: string;
    userName: string;
    bio?: string;
    numberOfRepos?: number;
    numberOfFollowers?: number;
    numberOfFollowing?: number;
    location?: string;
    twitterUrl?: any;
    githubUrl?: any;
    githubOrganization?: string;
}

export interface ProfileInfoProps {
    profile: Profile;
}


export interface SearchBarProps {
    searchedProfile: Profile | undefined | null,
    setSearchedProfile: React.Dispatch<React.SetStateAction<Profile | undefined | null>>;
}
