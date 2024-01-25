import { ReactNode } from "react";
import { cn } from "@/utils/Tailwind/twMerge";

const LayoutWrapper = ({
                           className,
                           children,
                       }: {
    className?: string;
    children: ReactNode;
}) => {
    return <div className="w-full flex justify-center">
        <div className={cn("p-6 rounded-md shadow-lg", className)}>
            {children}
        </div>
    </div>;
};

export default LayoutWrapper;