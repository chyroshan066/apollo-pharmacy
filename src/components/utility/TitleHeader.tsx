import { ClassName } from "@/types";
import { memo } from "react";

interface TitleHeader extends ClassName {
    title: string;
    subTitle: string;
}

export const TitleHeader = memo(({
    title, subTitle, className
}: TitleHeader) => (
    <div className={className}>
        <p className="section-subtitle text-center">{title}</p>
        <h2 className="h2 section-title text-center">{subTitle}</h2>
    </div>
));

TitleHeader.displayName = "TitleHeader";