import { Flutuante } from "./BgFlut";
import { ContainerGrid } from "./Container";
import { HeaderPage } from "./Header";
import { HomePage } from "./Home";
import { TabNavigtion } from "./TabSection";

export function Pagina() {
    return (
        <div className="relative bg-ColorBg w-screen h-full text-ColorWhite overflow-hidden pb-10">
            <ContainerGrid className={"z-20"}>
                <HeaderPage/>
                <HomePage/>
                <TabNavigtion/>
            </ContainerGrid>
            <Flutuante/>
        </div>
    )
}