import Image from "next/image";
import Link from "next/link";

const Navigation = [
    {
        Text: 'Home',
        Link: '#',
    },
    {
        Text: 'Descobrir',
        Link: '#',
    },
    {
        Text: 'Loja',
        Link: '#',
    },
    {
        Text: 'Ofertas',
        Link: '#',
    },
]

export function HeaderPage() {
    return (
        <div className="relative z-20 flex justify-between items-center py-5">
            <div className="flex items-center gap-3">
                <Image
                    src={"/LogoGamisany.svg"}
                    alt="Logo GaminSane"
                    width={48}
                    height={48}
                />
                <span className="text-3xl font-semibold">Gaminsany</span>
            </div>
            <div className="hidden @desktop:flex" >
                <nav className="flex items-center gap-8">
                    {Navigation.map((item, index) => (
                        <Link key={index} href={item.Link} className="text-sm font-medium text-ColorWhite/50 hover:border-b hover:border-pink-400 hover:text-ColorWhite hover:scale-105 transition-colorsall ease-linear"> {item.Text} </Link>
                    ))}
                </nav>
            </div>
            <div className="flex items-center gap-7">
                <div className="flex w-full max-w-72 h-14 bg-gradient-to-r from-slate-500/55 to-slate-500/55 backdrop-blur-sm border-gray-500 rounded-full p-5" >
                    <input placeholder="Pesquise um jogo" className="bg-white/0 w-full h-full hidden @tablet:flex"></input>
                    <Image
                        src={"/IconSearch.svg"}
                        alt="Icone Pesquisar"
                        width={22}
                        height={22}
                    />
                </div>
                <div>
                    <Image
                        src={"/IconNotification.svg"}
                        alt="Icone Notificação"
                        width={22}
                        height={22}
                    />
                </div>
                <div>
                    <div className="flex gap-3">
                        <Image
                            src={"/PhotoPerfil.png"}
                            alt="Foto Perfil"
                            width={45}
                            height={45}
                            className="bg-Bg-Perfil rounded-full"
                        />
                        <Image
                            src={"/ArrowDown.svg"}
                            alt="Seta para Baixo"
                            width={12}
                            height={6}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}