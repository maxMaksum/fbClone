import Image from 'next/image'

function Contact({id, name, src}) {
    return (
      <div className="relative flex items-center justify-evenly space-x-2 mb-2  hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
        <Image
          className="rounded-full"
          src={src}
          width={"50"}
          height={"50"}
          objectFit="cover"
          layout="fixed"
        />
        <p className="text-xs">{name}</p>
        <div className="absolute top-2 left-8 bg-green-400 h-3 w-3 rounded-full"></div>
      </div>
    );
}

export default Contact
