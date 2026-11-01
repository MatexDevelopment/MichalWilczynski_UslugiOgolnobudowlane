interface SectionHeadingProps {
    title: string;
    dark: boolean;
}

export default function SectionHeading({ title,dark }: SectionHeadingProps) {
    return (
        <div className="flex items-center gap-3 xl:gap-5 w-full">
            <div className="h-[8px] xl:h-[12px] bg-primary rounded-full w-10 md:w-25 " />

            {dark? <h2 className="font-heading font-bold text-3xl xl:text-5xl whitespace-nowrap">
                {title}
            </h2>
                :
                <h2 className="font-heading font-bold text-black text-3xl xl:text-5xl whitespace-nowrap">
                    {title}
                </h2>
            }


            <div className="h-[8px] xl:h-[12px]  bg-primary rounded-full flex-1" />
        </div>
    );
}