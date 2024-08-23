"use client";
import { ProfileInfo, ProfileSocials, ProfileStats, SearchBar, Title, ProfilePictureSide } from "@/components";
import { Profile } from "@/interfaces";
import { useState } from "react";
import profiles from "@/public/mock_data/dummy_profiles.json";


const Home = () => {
  const [searchedProfile, setSearchedProfile] = useState<Profile | undefined | null>(profiles[0]);


  return (
    <>
      <Title />
      <SearchBar searchedProfile={searchedProfile} setSearchedProfile={setSearchedProfile} />
      <div className="shadow-xl rounded-xl bg-white p-10 flex gap-2 dark:bg-[#1E2A47]">
        {
          searchedProfile
            ?
            <>
              <div className="hidden lg:block">
                <ProfilePictureSide />
              </div>
              <div>
                <ProfileInfo profile={searchedProfile} />
                <p className="lg:hidden">{searchedProfile.bio}</p>
                <div className="px-5 py-2 lg:p-0">
                  <ProfileStats profile={searchedProfile} />
                </div>
                <ProfileSocials profile={searchedProfile} />
              </div>
            </>
            :
            <span className="mx-auto text-xs md:text-lg">Search to find a developer on GitHub today!</span>
        }
      </div>
    </>
  );
}

export default Home;
