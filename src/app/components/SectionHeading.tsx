type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export const SectionHeading = ({
  children,
  className = "",
}: SectionHeadingProps) => {
  return (
    <h3
      className={`text-center font-[1000] uppercase text-base tab-port:text-lg laptop:text-[40px] ${className}`}
    >
      {children}
    </h3>
  );
};

export const SectionSubHeading = ({
  children,
  className = "",
}: SectionHeadingProps) => {
  return (
    <h4
      className={`text-xs text-center text-black/50 tab-port:text-sm laptop:text-base ${className}`}
    >
      {children}
    </h4>
  );
};
