export function PlaceholderTile({
  token,
  subject,
}: {
  token: string;
  subject: string;
}) {
  return (
    <div className="flex aspect-[4/3] w-full flex-col items-start justify-end bg-ink p-5 text-cream">
      <p className="font-display text-3xl font-extrabold uppercase leading-none">{subject}</p>
      <p className="mt-2 text-[14px] text-lamp">Photo coming</p>
      <p className="mt-3 font-display text-[14px] uppercase tracking-wide text-gold">{token}</p>
    </div>
  );
}
