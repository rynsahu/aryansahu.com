import InfoCard from "../../components/InfoCard";
import PageContainer from "../../components/PageContainer";
import Paragraph from "../../components/Paragraph";
import { usePostHog } from "@posthog/react";

export default function Inspiration() {
    const posthog = usePostHog();

    const trackResourceClick = (name: string) => {
        posthog?.capture('inspiration_resource_clicked', { resource_name: name });
    };

    return (
        <PageContainer className="gap-8">
            <Paragraph>
                <p>A list of all the people that I look up to, websites that I admire, tools that I use, videos that I watch and everything else that follows.</p>
                <p>I will keep on updating this list as I find more inspiration.</p>
            </Paragraph>

            <section className="flex flex-col gap-4">
                <InfoCard
                    link="https://frontendmasters.com"
                    heading="Frontend Masters"
                    icon="https://www.google.com/s2/favicons?domain=frontendmasters.com/&sz=48"
                    text="Learn from experts"
                    onClick={() => trackResourceClick('Frontend Masters')}
                />
                <InfoCard
                    link="https://code.claude.com"
                    heading="Claude Code"
                    icon="https://www.google.com/s2/favicons?domain=code.claude.com&sz=48"
                    text="AI tool I use"
                    onClick={() => trackResourceClick('Claude Code')}
                />
                <InfoCard
                    link="https://www.youtube.com/@syntaxfm"
                    heading="Syntax.fm"
                    icon="https://www.google.com/s2/favicons?domain=Syntax.fm&sz=48"
                    text="The web dev podcast I watch to stay current."
                    onClick={() => trackResourceClick('Syntax.fm')}
                />
                <InfoCard
                    link="https://www.youtube.com/@campusx-official"
                    heading="CampusX"
                    icon="https://www.google.com/s2/favicons?domain=learnwith.campusx.in/&sz=48"
                    text="The channel I watch to go deep on AI and ML concepts."
                    onClick={() => trackResourceClick('CampusX')}
                />
            </section>
        </PageContainer>
    )
}