import { ReactNode } from "react";
import { cn } from "@/utils/Tailwind/twMerge";

const LayoutWrapper = ({
                           className,
                           children,
                       }: {
    className?: string;
    children: ReactNode;
}) => {
    return <div className={cn("p-4 lg:ml-10 lg:mr-10 rounded-md shadow-lg", className)}>{children}</div>;
};

export default LayoutWrapper;