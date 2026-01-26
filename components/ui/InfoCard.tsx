type InfoCardProps = {
  title?: string;
  children?: React.ReactNode;
};

export function InfoCard({ title,children }: InfoCardProps) {
  return (
    <div className="bg-gray-100  p-2 flex gap-3 items-center">
        {children}
        {title && (
            <h1 className="text-xl font-bold text-black m-0">
                {title}
            </h1>
        )}
    </div>
  );
}
