import Link from "next/link";
import {Title} from "@/components/UI/Title";
import {MainContainer} from "@/app/mainContainer";
import {Button} from "@/components/UI/Button";


export default function Home() {
    return (
        <MainContainer>
            <Title>Swapi tech API films</Title>
            <Link href="/films">
                <Button>go to films</Button>
            </Link>
        </MainContainer>
    )
}
