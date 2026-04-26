import Divider from "../../components/Divider";
import InfoCard from "../../components/InfoCard";
import glanceIcon from "../../assests/glancescreen_logo.jpeg";
import publicisIcon from "../../assests/publicis-sapient.jpeg";
import thidiffIcon from "../../assests/thidiff_technologies_logo.jpeg";
import cloutIcon from "../../assests/roposo_clout_logo.jpeg";
import torchliteIcon from "../../assests/torchlite_logo.jpeg";
import terminalIcon from "../../assests/icons/terminal.svg";
import BlockContent from "../../components/BlockContent";
import PageContainer from "../../components/PageContainer";
import Paragraph from "../../components/Paragraph";
import { Link } from "react-router";

export default function Home() {
    return (
        <PageContainer>
            <Paragraph>
                <p>Frontend Engineer · 6 years · React, Next.js, TypeScript</p>
                <p>
                    I'm a software engineer at heart, I've gone from writing my first component to leading full product frontends, 
                    mentoring devs, and caring deeply about things like CI/CD, bundle size, Core Web Vitals and code reviews that actually 
                    teach something.
                </p>
                <p>
                   When I'm not at my desk, I'm usually reading about AI, tinkering with LLMs, or thinking about frontend architecture problems I didn't ask for.
                </p>
                <p>
                    Currently exploring new opportunities. If you're building something ambitious, I'd love to <Link to="https://drive.google.com/file/d/19WE5z87FSaUzhyZCCcRBgiPe-JOP1oOT/view?usp=sharing" target="_blank" className="color-primary underline">talk</Link>.
                </p>
            </Paragraph>

            <Divider />

            <BlockContent heading="Experience / Companies I've worked with">
                <div className="flex flex-col gap-6">
                    <InfoCard
                        direction="col"
                        heading='Glance'
                        subHeading='SDE 2 → SDE 3 · Jul 2022 - Present'
                        icon={glanceIcon}
                        text={'Grew from building features to owning the entire frontend of Roposo Clout architecture, performance, code review and team. Pushed an 80% improvement in Core Web Vitals, set up CI/CD with security checks, and mentored juniors while keeping the product moving.'}
                    />
                    <InfoCard
                        direction="col"
                        heading='Publicis Sapient'
                        subHeading='Associate Experience Technology L2 · Mar 2021 - Jul 2022'
                        icon={publicisIcon}
                        text={'Built SPA insurance products using React and Redux, hit 90% Jest test coverage, and worked in a full agile setup scrums, sprint planning, backlog grooming. Also managed content through AEM-CMS.'}
                    />
                    <InfoCard
                        direction="col"
                        heading='Thidiff'
                        subHeading='Software Developer · Dec 2019 - Mar 2021'
                        icon={thidiffIcon}
                        text={'My first full-stack role built RESTful APIs, developed reusable React components, and integrated third-party APIs (Trello, Shopify, BlueJeans). Shipped weekly with QA collaboration.'}
                    />
                </div>
            </BlockContent>

            <Divider/>

            <BlockContent heading="Projects">
                <div className="flex flex-col gap-6">
                    <InfoCard
                        direction="col"
                        heading='Roposo Clout'
                        subHeading='Lead Frontend'
                        icon={cloutIcon}
                        text={
                            <div className="flex flex-col gap-2">
                                <p>
                                    Took full ownership of the frontend from early stages not just building features but making architectural decisions, 
                                    setting standards, and keeping the codebase maintainable as the product scaled. 
                                </p>
                                <p>
                                    The impact that mattered most: an 80% improvement in Core Web Vitals, real-time analytics integrated end to end, and a deployment pipeline that actually gave 
                                    the team confidence to ship.
                                </p>
                                <p>
                                    <b>Stack:</b> Next.js · Redux · TypeScript · TailwindCSS · Node.js · Docker · Nginx · AWS S3 · Axios · Winston
                                </p>
                            </div>
                        }
                    />
                    <InfoCard
                        direction="col"
                        heading='Torchlite'
                        subHeading='Full Stack Developer'
                        icon={torchliteIcon}
                        text={
                            <div className="flex flex-col gap-2">
                                <p>
                                    Built both the frontend and backend for a meeting and collaboration platform designed the API layer in Express, 
                                    wired up PostgreSQL with Sequelize ORM, and delivered the full React frontend with role-based access control and a 
                                    BlueJeans API integration for in-app meeting scheduling.
                                </p>
                                <p>
                                    Early in my career but one of the first times I saw the full picture from database to UI and understood 
                                    how decisions on one end ripple through the other.
                                </p>
                                <p>
                                    <b>Stack:</b> React · Redux · Express · Node.js · PostgreSQL · Material UI · AWS S3 · Sequelize ORM · Heroku
                                </p>
                            </div>
                        }
                    />
                </div>
            </BlockContent>

            <Divider />

            <BlockContent heading="Work with me">
                <InfoCard
                    link="https://drive.google.com/file/d/19WE5z87FSaUzhyZCCcRBgiPe-JOP1oOT/view?usp=sharing"
                    iconShadow="shadow-1"
                    headerWrapperClass="gap-4"
                    heading="Hire me"
                    icon={terminalIcon}
                    text="Let's build a world class website for your business."
                />
            </BlockContent>
        </PageContainer>
    );
}
