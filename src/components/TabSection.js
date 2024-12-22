import Image from "next/image"

const TabLinks = [
    {
        Texto: "Melhores partes",
    },
    {
        Texto: "Sinopse",
    },
    {
        Texto: "Galeria de fotos",
    },
]

const Capitulos = [
    {
        Image: "/ImgFirstSchool.png",
        Title: "Primeiro dia na escola",
        Text: "Capítulo I",
        Stars: "5",
        Bg: "#2CFFCC"
    },
    {
        Image: "/ImgEveryAll.png",
        Title: "Convocando todos",
        Text: "Capítulo II",
        Stars: "4.8",
        Bg: "#FF8FD9"
    },
    {
        Image: "/ImgAction.png",
        Title: "O plano em ação",
        Text: "Capítulo III",
        Stars: "4.7",
        Bg: "#9479FF"
    }
]

export function TabNavigtion() {
    return (
        <div className="flex flex-col w-full relative z-20 mt-16">
            <div className="w-full flex items-center gap-8 mb-8">
                {TabLinks.map((item, index) => (
                    <div key={index} className="relative group">
                        <p className="relative cursor-pointer text-base font-medium text-ColorWhite/50 hover:text-ColorWhite ease-linear">
                            {item.Texto}
                        </p>
                        <div className="h-[1px] w-full bg-transparent transition-all duration-500 group-hover:bg-pink-500 group-hover:w-full"></div>
                    </div>
                ))}
            </div>
            <div className="flex gap-8 justify-between">
                <div className="flex items-center gap-11 bg-gradient-to-r from-slate-500/55 to-slate-500/5 backdrop-blur-2xl border-gray-500 border rounded-2xl h-96 w-Full p-9">
                    <div className="relative flex items-center justify-center bg-gradient-to-b from-blue-500 to-[#15182D] rounded-2xl group cursor-pointer">
                        <Image
                            src={"/ImgNotaZero.png"}
                            alt=""
                            width={257}
                            height={331}
                            className="relative z-10"
                        />
                        <Image
                            src={"/IconSubtract.svg"}
                            alt=""
                            width={52}
                            height={52}
                            className="absolute z-20 group-hover:scale-110 transition-all"
                        />
                    </div>
                    <div className="w-Full">
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 bg-pink-500 text-TxTBlack font-bold rounded-full">SUSPENSE</span>
                            <span className="px-3 py-1 bg-blue-400 text-TxTBlack font-bold rounded-full">AÇÃO</span>
                        </div>
                        <h2 className="py-3 text-4xl font-bold">Ensino médio: nota zero</h2>
                        <p className="w-[420px] text-sm font-medium text-ColorWhite/75">Se Bruno conseguir sobreviver ao ano escolar e for mais esperto que os seus rivais, ele poderá controlar a escola.</p>
                        <div className="w-Full flex items-center justify-between mt-16">
                            <button className="px-5 py-4 text-sm font-bold border border-white rounded-xl hover:scale-110 transition-all">Ver o trailer</button>
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={"/IconPinkPlayers.svg"}
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                    <span>3.122 players</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={"/IconYellowStars.svg"}
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                    <span>5/5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="flex flex-col justify-between w-Full max-w-80">
                    {Capitulos.map((item, index) => (
                        <li key={index} className="flex items-center gap-6 bg-gradient-to-r from-slate-500/55 to-slate-500/5 backdrop-blur-2xl border-gray-500 border rounded-2xl p-3 cursor-pointer hover:scale-105 transition-all">
                            <div 
                                className='rounded-2xl' 
                                style={{ 
                                    backgroundImage: `linear-gradient(to bottom, ${item.Bg}, #15182D)` 
                                }}
                            >
                                <Image
                                    src={item.Image}
                                    alt=""
                                    width={69}
                                    height={91}
                                />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-sm">{item.Title}</h3>
                                <span className="font-medium text-sm text-ColorWhite/70">{item.Text}</span>
                                <div className="flex items-center justify-between mt-3">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={"/IconYellowStars.svg"}
                                            alt=""
                                            width={24}
                                            height={24}
                                        />
                                        <span>{item.Stars}/5</span>
                                    </div>
                                    <Image
                                        src={"/ArrowRight.svg"}
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
