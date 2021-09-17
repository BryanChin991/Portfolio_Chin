//  imr shortcut key
import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as GiIcons from "react-icons/gi"
import * as IoIcons from "react-icons/io"
import * as AiIcons from "react-icons/ai"
import * as SiIcons from "react-icons/si"

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
        title: 'About',
        path: '/about',
        icon: <SiIcons.SiAboutDotMe />,
        cName: 'nav-text',
    },
    {
        title: 'Qualification',
        path: '/qualification',
        icon: <GiIcons.GiMedallist />,
        cName: 'nav-text',
    },

]
