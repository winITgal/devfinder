import { SearchBarProps } from '@/interfaces';
import React, { useState, useEffect, useRef } from 'react';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import profiles from "@/public/mock_data/dummy_profiles.json";

const SearchBar: React.FC<SearchBarProps> = ({ searchedProfile, setSearchedProfile }) => {
    const [placeholderText, setPlaceholderText] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setPlaceholderText(window.matchMedia("(min-width: 768px)").matches
                    ? "Search GitHub username ..."
                    : "");
            };
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const searchQuery = inputRef.current?.value.trim().toLowerCase();
        if (!searchQuery) {
            console.log("Search query is empty");
            return;
        }

        const foundProfile = profiles.find(profile =>
            profile.userName.toLowerCase().includes(searchQuery)
        );

        setHasSearched(true);

        if (foundProfile) {
            console.log("Profile found:", foundProfile);
            setSearchedProfile(foundProfile);
        } else {
            console.log("No profile found");
            setSearchedProfile(null);
        }


        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    return (
        <div className='shadow-xl rounded-md md:rounded-xl bg-white dark:bg-[#1E2A47] p-2 md:p-5 flex flex-col md:flex-row justify-between items-center mb-5'>
            <form className='flex items-center w-full gap-2' onSubmit={handleOnSubmit}>
                <PiMagnifyingGlassLight size={placeholderText ? 30 : 20} color='#0079FF' className='flex-shrink-0' />
                <input
                    className='outline-none bg-transparent text-xs md:text-lg p-2 flex-1 caret-[#0079FF] dark:placeholder:text-white'
                    type="text"
                    placeholder={placeholderText}
                    required
                    ref={inputRef}
                />
                <div className='flex items-center gap-2 md:gap-3'>
                    {
                        hasSearched && searchedProfile === null &&
                        <span className='text-[#F74646] text-[10px] md:text-sm font-bold whitespace-nowrap'>
                            No results
                        </span>
                    }
                    <button
                        className='bg-[#0079FF] p-1 text-[12px] md:p-2 md:text-base rounded-md text-white font-semibold hover:bg-[#60ABFF]'
                        type='submit'
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
