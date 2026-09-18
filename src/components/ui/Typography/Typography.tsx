export function Title({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1 className="
      text-5xl
      font-semibold
      tracking-tight
    ">
      {children}
    </h1>
  );
}