export function HomePage() {
    return(
        <div className="flex flex-col items-center justify-center relative z-20 pt-28 w-Full text-center @desktop:text-left @desktop:w-LeftText @desktop:justify-start @desktop:items-start" >
            <div className="flex items-center gap-7 mb-6">
                <p className="text-sm font-medium uppercase text-SpanAzulClaro" >4 HR 55 MIN</p>
                <p className="text-sm font-medium uppercase text-SpanAzulClaro">2021</p>
                <p className="text-sm font-medium uppercase text-SpanAzulClaro">COOPERATIVO</p>
                <p className="text-sm font-medium uppercase text-SpanAzulClaro">AÇÃO</p>
                <p className="text-sm font-medium uppercase text-SpanAzulClaro">PUZZLE</p>
            </div>
            <h1 className="text-7xl font-bold">Schooly gaming</h1>
            <p className="text-sm text-ColorWhite/75 py-8" >No papel de um estudante, você enfrentará valentões, será bode-expiatório de professores, irá pregar peças, ganhar ou perder a garota e finalmente aprender a superar os obstáculos da pior escola da área</p>
            <div className="flex items-center gap-12">
                <button className="bg-BgButton px-5 py-4 text-base font-bold rounded-xl hover:scale-105 transition-all">
                    Comprar o jogo
                </button>
                <span className="text-base font-semibold rounded-xl" >A partir de R$199,99</span>
            </div>
        </div>
    )
}