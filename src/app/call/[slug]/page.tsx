import { getData } from "@/data/getToken";
import ClientVideocall from "@/components/ClientVideocall";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jwt = await getData(slug);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientVideocall slug={slug} JWT={jwt} />
    </main>
  );
}
