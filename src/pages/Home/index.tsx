import Divider from "../../components/Divider";
import InfoCard from "../../components/InfoCard";
import glanceIcon from "../../assests/glancescreen_logo.jpeg";
import publicisIcon from "../../assests/publicis-sapient.jpeg";
import thidiffIcon from "../../assests/thidiff_technologies_logo.jpeg";
import BlockContent from "../../components/BlockContent";
import PageContainer from "../../components/PageContainer";
import Paragraph from "../../components/Paragraph";

export default function Home() {
    return (
        <PageContainer>
            <Paragraph>
                <p>
                    I'm a software engineer at heart, tinkering with AI and code almost 90% of the time. I'm mostly active on X / Twitter where I share everything.
                </p>
                <p>
                    When I'm not coding, I usually talk about Design Engineering, AI Tools and Front-end design taste at my YouTube Channel.
                </p>
                <p>
                    I've been building my own component library Aceternity UI for the past 4 years. It has got around 3M page views and 200k unique visitors a month. My favourite thing is to update this library everyday with new components and features.
                </p>
            </Paragraph>

            <Divider />

            <BlockContent heading="Companies I've worked with">
                <div className="flex flex-col gap-6">
                    <InfoCard
                        direction="col"
                        heading='Glance'
                        subHeading='SDE 3 - Present'
                        icon={glanceIcon}
                        text={'Led the frontend development of the Roposo Clout web app, from early stages to full ownership, utilizing Next.js, Redux, and TypeScript, improving scalability and maintainability.'}
                    />
                    <InfoCard
                        direction="col"
                        heading='Publicis Sapient'
                        subHeading='SDE 1'
                        icon={publicisIcon}
                        text={'Led the frontend development of the Roposo Clout web app, from early stages to full ownership, utilizing Next.js, Redux, and TypeScript, improving scalability and maintainability.'}
                    />
                    <InfoCard
                        direction="col"
                        heading='Thidiff'
                        subHeading='SDE'
                        icon={thidiffIcon}
                        text={'Led the frontend development of the Roposo Clout web app, from early stages to full ownership, utilizing Next.js, Redux, and TypeScript, improving scalability and maintainability.'}
                    />
                </div>
            </BlockContent>

            <Divider />

            <BlockContent heading="Work with me">
                <InfoCard
                    link="/"
                    iconShadow="shadow-1"
                    headerWrapperClass="gap-4"
                    heading="Hire me"
                    icon={glanceIcon}
                    text="Let's build a world class website for your business."
                />
            </BlockContent>
        </PageContainer>
    );
}
