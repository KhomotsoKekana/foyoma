import React from "react";
import {BellIcon, BookmarkIcon, EllipsisHorizontalCircleIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon} from "@heroicons/react/24/outline";

export default function SideBar() {
  return (
    <nav className="h-screen hidden sm:flex flex-col sticky top-0 p-3 xl:ml-20">
        <div className="relative h-full">
            <div className="py-1">
                <img src={'/assets/logo.png'} className="h-25 cursor-pointer" alt="logo" />
            </div>
                
            <ul>
                <SideBarLink Icon={HomeIcon} text="Home" />
                <SideBarLink Icon={HashtagIcon} text="Explore" />
                <SideBarLink Icon={BellIcon} text="Notifications" />
                <SideBarLink Icon={InboxIcon} text="Messages" />
                <SideBarLink Icon={UserIcon} text="Profile" />
                <SideBarLink Icon={BookmarkIcon} text="Bookmark" />
                <SideBarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
                <button className="bg-[#8eb69b] text-white px-4 py-2 w-[200] h-[52] rounded-full hidden cursor-pointer xl:inline font-bold hover:bg-[#7aa68a]">
                    Post
                </button>                
            </ul>

            <div className="absolute bottom-0 flex flex-col items-center space-x-3 p-2.5 cursor-pointer hover:bg-gray-200 rounded-full">
               <p>name</p>
               <span>Username</span>
            </div>

        </div>

    </nav>
  );
}

interface SideBarLinkProps {
    text: string;
    Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
        title?: string | undefined ;
        titleId?: string | undefined;
     } & React.RefAttributes<SVGSVGElement>
    >;  
    //Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function SideBarLink({text, Icon}: SideBarLinkProps) {
    return (
        <li className="flex items-center text-xl mb-3 space-x-3 p-2.5 cursor-pointer">
            <Icon className="h-6" />
            <span className="hidden xl:block">{text}</span>
        </li>
    );

}