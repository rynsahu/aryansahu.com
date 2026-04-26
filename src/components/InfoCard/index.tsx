import { ReactNode } from "react";
import { Link } from "react-router";

interface InfoCardPros {
    direction?: 'row' | 'col';
    heading: string;
    subHeading?: string;
    icon: any;
    iconShadow?: 'shadow-2' | 'shadow-1';
    text: string | ReactNode;
    className?: string;
    headerWrapperClass?: string;
    link?: string;
}

function Card({ children, link, className='' }: { children: ReactNode; link: string; className?: string }) {
    if (link) {
        return (
            <Link to={link} className={className}>{children}</Link>
        );
    }

    return <div className={className}>{children}</div>
}

export default function InfoCard({ direction='row', heading, icon, text, className='', subHeading, headerWrapperClass='', iconShadow='', link='' }: InfoCardPros) {
    const shadow = iconShadow ? iconShadow : link ? 'shadow-2' : 'shadow-1'

    return (
        <Card link={link} className={`flex ${direction === 'col' ? 'flex-col gap-3' : 'gap-2 items-center'} text-sm ${className}`}>
            {/* header */}
            <div className={`flex ${subHeading ? "items-start" : "items-center"} gap-2 ${headerWrapperClass}`}>
                <img src={icon} alt={heading} width={32} height={32} className={`rounded-sm overflow-hidden ${shadow}`} />
                <div className="flex flex-col">
                    <p className="text-sm font-normal color-primary text-nowrap">{heading}</p>
                    {subHeading && <p className="text-xs font-normal color-tertiary">{subHeading}</p>}
                </div>
            </div>
            {/* Divider */}
            {direction === 'row' && <div className="dot"></div>}
            {/* Paragraph */}
            <p className={`color-tertiary ${link ? 'hover_color-primary' : ''}`}>{text}</p>
        </Card>
    );
}