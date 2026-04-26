import { ReactNode } from "react";

export default function Paragraph({ children }: { children: ReactNode }) {
    return(
        <section className="flex flex-col gap-4">
            {children}
        </section>
    );
}