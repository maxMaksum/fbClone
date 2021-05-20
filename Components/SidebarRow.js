
import Image from 'next/image'
function SidebarRow({Icon, title, src}) {
    return (
      <div className="flex items-center space-x-2 p-4  bg-gray-200">
        {src && (
         
            <Image
              className="rounded-full cursor-pointer"
              src={src}
              width={30}
              height={30}
              layout="fixed"
            />
           
        
        )}

{Icon && (
              <div className="flex items-center cursor-pointer">
                <Icon className="h-8 w-8 text-blue-500" />
                <p className="hidden sm:inline-flex font-md">{title}</p>
              </div>
            )}
      </div>
    );
}

export default SidebarRow
