import { CashAppGive } from "@/components/cash-app-give";
import { buildingFund } from "@/lib/campaign";

export function FundMeter({ priorityQr = false }: { priorityQr?: boolean }) {
  return (
    <section className="hex-field" id="building-fund">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-2 md:items-start md:px-8 md:py-14">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">{buildingFund.name}</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-[0.9] text-cream sm:text-6xl">
            {buildingFund.headline}
          </h2>
          <p className="mt-4 text-xl text-cream">{buildingFund.tagline}</p>
          <p className="mt-3 max-w-xl text-cream/85">{buildingFund.what}</p>
          <ul className="mt-5 space-y-1 text-cream/90">
            {buildingFund.uses.map((use) => (
              <li key={use}>{use}</li>
            ))}
          </ul>
          <p className="mt-8 font-display text-sm uppercase tracking-[0.2em] text-gold">Goal</p>
          <p className="font-display text-6xl uppercase leading-none text-gold tabular-nums sm:text-7xl">
            {buildingFund.goalLabel}
          </p>
          <dl className="mt-6 space-y-2 text-cream/90">
            {buildingFund.costs.map((row) => (
              <div key={row.item} className="flex justify-between gap-4 border-b border-cream/15 py-2">
                <dt>{row.item}</dt>
                <dd className="font-display text-xl uppercase tabular-nums text-gold">{row.amount}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">Give on Cash App</p>
          <p className="mt-3 mb-6 max-w-md text-cream/90">
            Your gift goes to the 30x30 Building Fund. Use Cash App on your phone, or scan the code from another device.
          </p>
          <CashAppGive priority={priorityQr} />
        </div>
      </div>
    </section>
  );
}
