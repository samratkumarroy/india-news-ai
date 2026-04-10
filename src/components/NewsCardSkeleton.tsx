import { Skeleton } from "@/components/ui/skeleton";

export default function NewsCardSkeleton({ isHero = false }: { isHero?: boolean }) {
  return (
    <div
      className={`bg-card border border-rule rounded-sm overflow-hidden ${
        isHero ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <Skeleton className="w-full h-40 sm:h-48 rounded-none" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
        <div className="flex justify-between pt-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  );
}
