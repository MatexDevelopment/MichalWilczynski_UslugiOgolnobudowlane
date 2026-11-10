interface SectionHeadingProps {
    title: string;
    dark: boolean;
    id?: string;
}

export default function SectionHeading({ title, dark, id }: SectionHeadingProps) {
    return (
        <div className="flex items-center gap-3 xl:gap-5 w-full">
            <div className="h-[8px] xl:h-[12px] bg-primary rounded-full w-10 md:w-25" />

            <h2
                id={id}
                className={`font-heading font-bold text-3xl xl:text-5xl whitespace-nowrap ${
                    dark ? "" : "text-black"
                }`}
            >
                {title}
            </h2>

            <div className="h-[8px] xl:h-[12px] bg-primary rounded-full flex-1" />
        </div>
    );
}