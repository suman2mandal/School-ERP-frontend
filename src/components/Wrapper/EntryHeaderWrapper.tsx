import { ReactNode } from "react";
import { cn } from "@/utils/Tailwind/twMerge";

const LayoutWrapper = ({
                           className,
                           children,
                       }: {
    className?: string;
    children: ReactNode;
}) => {
    return <div className={cn("ml-8 py-3 rounded-md text-xl", className)}>{children}</div>;
};

export default LayoutWrapper;