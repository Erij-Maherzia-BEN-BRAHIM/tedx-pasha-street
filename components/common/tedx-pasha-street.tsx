import { cn } from "@/lib/utils";

export function TedxPashaStreet({
  disableTEDRed,
}: {
  disableTEDRed?: boolean;
}) {
  return (
    <>
      <span
        className={cn("font-extrabold", disableTEDRed ? "" : "text-[#e62b1e]")}
      >
        TEDx
      </span>
      <span className="!font-light">Pasha Street</span>
    </>
  );
}
