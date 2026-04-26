import { ReactNode } from "react";

export default function PageContainer({ children, className='' }: { children: ReactNode; className?: string }) {
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    );
}