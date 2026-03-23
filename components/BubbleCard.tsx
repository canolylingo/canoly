export function BubbleCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`bubble p-5 ${className}`}>{children}</div>;
}
