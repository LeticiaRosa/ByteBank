import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute left-0 top-0  h-screen w-screen bg-verde text-white gap-10">
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <Image src="/404.png" alt="404 Not Found" width={300} height={300} />
        <p>Could not find requested resource</p>
        <Link href="/services" className="btn-secoundary">
          Return Home
        </Link>
      </div>
    </div>
  );
}
