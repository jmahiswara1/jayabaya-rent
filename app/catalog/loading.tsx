import Skeleton from "@/components/atoms/Skeleton";

export default function Loading() {
    return (
        <div className="container-main py-20">
            <Skeleton variant="text" width="25%" height="2rem" className="mb-4 mx-auto" />
            <Skeleton variant="text" width="50%" height="1rem" className="mb-12 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Skeleton key={i} className="aspect-[4/3] rounded-xl" />
                ))}
            </div>
        </div>
    );
}
