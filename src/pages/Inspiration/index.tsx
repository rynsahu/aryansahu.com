import InfoCard from "../../components/InfoCard";
import PageContainer from "../../components/PageContainer";
import Paragraph from "../../components/Paragraph";

export default function Inspiration() {
    return (
        <PageContainer className="gap-8">
            <Paragraph>
                <p>A list of all the people that I look up to, websites that I admire, tools that I use and everything else that follows.</p>
                <p>I will keep on updating this list as I find more inspiration.</p>
            </Paragraph>

            <section className="flex flex-col gap-4">
                <InfoCard
                    link="/"
                    heading="Posthog"
                    icon="https://www.google.com/s2/favicons?domain=posthog.com&sz=48"
                    text="Analytics tool that has made my life so much easier."
                />
                <InfoCard
                    link="/"
                    heading="Clay"
                    icon="https://www.google.com/s2/favicons?domain=me.sh&sz=48"
                    text="Top notch product & website design"
                />
                <InfoCard
                    link="/"
                    heading="Anthropic"
                    icon="https://www.google.com/s2/favicons?domain=anthropic.com&sz=48"
                    text="AI Company i trust"
                />
                <InfoCard
                    link="/"
                    heading="Hugeicons"
                    icon="https://www.google.com/s2/favicons?domain=hugeicons.com&sz=48"
                    text="Using these icons in all of my projects"
                />
            </section>
        </PageContainer>
    )
}