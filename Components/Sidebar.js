
import {useSession,  signOut} from 'next-auth/client'
import SidebarRow from './SidebarRow'
import {ChevronDownIcon, ShoppingBagIcon, UserGroupIcon} from '@heroicons/react/solid'
import {CalendarIcon, ClockIcon, DesktopComputerIcon, UserIcon} from '@heroicons/react/outline'
function Sidebar() {

    const  [session, loading] = useSession()

    console.log(session)
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
          
            <SidebarRow src={session.user.image} title="friends"/>
            <SidebarRow Icon={UserIcon} title="friends"/>
            <SidebarRow Icon={UserGroupIcon} title="Group"/>
            <SidebarRow Icon={ShoppingBagIcon} title="Market Place"/>
            <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SidebarRow Icon={CalendarIcon} title="Events"/>
            <SidebarRow Icon={ClockIcon} title="Memories"/>
            <SidebarRow Icon={ChevronDownIcon} title="See More"/>
        </div>
    )
}

export default Sidebar
