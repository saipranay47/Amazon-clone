import Image from "next/image"

function Footer() {
    return (
        <div className="flex text-white flex-col bg-amazon_blue justify-evenly items-center">
            <div className="p-5">
                <span className="font-bold text-xl">Disclaimer: </span>
                <span className="">This is not the official Amazon Store. It is a redesign, built purely for educational purpose.</span>
            </div>
        <div className=" flex justify-items-center items-center flex-grow sm:flex-grow-0 p-5">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={100}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
          <span className="pl-5">© 2021 | Developed by Sai Pranay --&nbsp;</span> <a className="link hover:text-yellow-400" href="https://www.instagram.com/creative__programmer/">Creatrive Programmer</a>
        </div>
        </div>
    )
}

export default Footer
