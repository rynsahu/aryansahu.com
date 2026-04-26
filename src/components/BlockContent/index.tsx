import { ReactNode } from "react";

interface BlockContentPros {
    heading: string;
    children: ReactNode;
}

export default function BlockContent({ heading, children }: BlockContentPros) {
    return (
        <section className="flex flex-col gap-8">
            <h2 className="color-quaternary text-sm font-normal uppercase font-monospace">{heading}</h2>
            {children}
        </section>
    );
}