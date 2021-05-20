function InputIcon({Icon, title, active}) {
    
    const h ="20"
  
    return (
      <div>
        <div className="flex flex-grow p-2 justify-center  items-center space-x-1 hover:bg-gray-100  cursor-pointer rounded-xl">
          <Icon className={`h-${8} w-${h} `} />
          <p className="text-xs sm:text-sm xl:text-base text-gray-900">
            {title}
          </p>
        </div>
      </div>
    );
}

export default InputIcon
