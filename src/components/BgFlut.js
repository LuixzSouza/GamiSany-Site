import Image from "next/image";

export function Flutuante() {
    return (
        <div className="">
            <Image
                src={"/Bg-Bag.png"}
                alt=""
                width={393}
                height={658}
                className="absolute  bottom-1/3 -left-32  @desktop:left-44 @desktop:-bottom-40 animate-float-backpack z-10"
            />
            <Image
                src={"/Bg-Chair.png"}
                alt=""
                width={533}
                height={846}
                className="absolute  animate-float-person z-10 -bottom-60 -right-36 "
            />
            <Image
                src={"/Bg-Pen.png"}
                alt=""
                width={135}
                height={121}
                className="absolute -left-9 bottom-0 animate-float-pen z-10"
            />
            <Image
                src={"/Gb-Person.png"}
                alt=""
                width={1266}
                height={1066}
                className="absolute -right-80 -top-2 animate-float-chair z-10"
            />
        </div>
    )
}