//  imr shortcut key
import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as GiIcons from "react-icons/gi"
import * as MdIcons from "react-icons/md"
import * as AiIcons from "react-icons/ai"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text',
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiOutlineFundProjectionScreen />,
        cName: 'nav-text',
    },
    {
        title: 'Experiences',
        path: '/experience',
        icon: <MdIcons.MdWork />,
        cName: 'nav-text',
    },
    {
        title: 'Qualification',
        path: '/qualification',
        icon: <GiIcons.GiMedallist />,
        cName: 'nav-text',
    },
    {
        title: 'About Me',
        path: '/about',
        icon: <MdIcons.MdQuestionAnswer/>,
        cName: 'nav-text',
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <MdIcons.MdContactMail />,
        cName: 'nav-text',
    },


]
