function HeaderIcon2({Icon, active}) {
    return (
        // cursor-pointer  md:px-10 flex items-center sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group
        // sm:h-7
        //     mx-auto
        //     text-gray-500
        //     group-hover:text-blue-500 ${active && `text-blue-500`}`}
       <div className={`` } >
            <Icon className={`h-10 w-10
            hidden xl:inline-flex
            p-2 bg-gray-200 rounded-full cursor hover:bg-gray-300
            
            `}
           />
        </div>
    )
}

export default HeaderIcon2
