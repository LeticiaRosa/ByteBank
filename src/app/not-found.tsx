import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-verde text-white gap-10">
      <h2 className="text-size-25">Not Found!</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="p-4 texto-white rounded-2xl bg-cinza-escuro">
        Return Home
      </Link>
    </div>
  );
}
