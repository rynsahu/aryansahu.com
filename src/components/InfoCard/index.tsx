import { ReactNode } from "react";

interface InfoCardPros {
    direction?: 'row' | 'col';
    heading: string;
    subHeading?: string;
    icon: any;
    iconShadow?: string;
    text: string | ReactNode;
    className?: string;
    headerWrapperClass?: string;
}

export default function InfoCard({ direction='col', heading, icon, text, className='', subHeading, headerWrapperClass='', iconShadow='shadow-1' }: InfoCardPros) {
    return (
        <div className={`flex ${direction === 'col' ? 'flex-col gap-3' : 'gap-2 items-center'} text-sm ${className}`}>
            {/* header */}
            <div className={`flex ${subHeading ? "items-start" : "items-center"} gap-2 ${headerWrapperClass}`}>
                <img src={icon} alt={heading} width={32} height={32} className={`rounded-sm overflow-hidden ${iconShadow}`} />
                <div className="flex flex-col">
                    <p className="text-sm font-normal">{heading}</p>
                    {subHeading && <p className="text-xs font-normal color-tertiary">{subHeading}</p>}
                </div>
            </div>
            {/* Divider */}
            {direction === 'row' && <div className="dot"></div>}
            {/* Paragraph */}
            <p className="color-tertiary">{text}</p>
        </div>
    );
}