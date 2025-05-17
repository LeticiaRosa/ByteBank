interface BaseHeaderProps {
  children?: React.ReactNode;
}

export function HeaderBase({ children }: BaseHeaderProps) {
  return (
    <header className="flex flex-col items-center justify-center bg-verde py-6 w-full overscroll-none">
      <div className="container max-w-250 justify-between flex-row max-xs:items-center">
        {children}
      </div>
    </header>
  );
}
