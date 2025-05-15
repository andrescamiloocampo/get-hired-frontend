import { SidebarItem } from "../models/sidebarItem.model";

export const sidebarItems:SidebarItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: 'dashboard'
    },
    {
        title: 'CV Templates',
        href: '/dashboard/templates',
        icon: 'document_scanner'
    },
    {
        title: 'My Skills',
        href: '/dashboard/skills',
        icon: 'badge'
    },
    {
        title: 'Job Matches',
        href: '/dashboard/matches',
        icon: 'work'
    },
    {
        title: 'Profile',
        href: '/dashboard/profile',
        icon: 'person'
    },
    {
        title: 'Settings',
        href: '/dashboard/settings',
        icon: 'settings'
    },
]