import { ReactNode } from "react";
import { cn } from "@/utils/Tailwind/twMerge";

const LayoutWrapper = ({
                           className,
                           children,
                       }: {
    className?: string;
    children: ReactNode;
}) => {
    return <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-4 items-center justify-items-center mb-8", className)}>{children}</div>;
};

export default LayoutWrapper;
