type DirectoryRowProps = {
  name: string;
  category: string;
  status: "Ready" | "In progress" | "To do";
  iconLetter?: string;
};

const statusConfig = {
  Ready: { dot: "bg-green-500", text: "text-green-700", bg: "bg-green-50" },
  "In progress": { dot: "bg-[#ef4d23]", text: "text-[#ef4d23]", bg: "bg-orange-50" },
  "To do": { dot: "bg-neutral-400", text: "text-neutral-600", bg: "bg-neutral-100" },
};

export default function DirectoryRow({ name, category, status, iconLetter }: DirectoryRowProps) {
  const config = statusConfig[status];

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-[#e7e5e4] bg-white px-3 py-2.5 sm:px-4 sm:py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f5f2ee] text-[12px] font-semibold text-[#66645f]">
          {iconLetter || name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-medium text-[#171717]">{name}</p>
          <p className="truncate text-[11px] text-[#66645f]">{category}</p>
        </div>
      </div>
      <span
        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${config.bg} ${config.text}`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
        {status}
      </span>
    </div>
  );
}
