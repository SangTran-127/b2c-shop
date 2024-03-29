import { serverClient } from "./_trpc/serverClient";
import IntroSection from "@/components/section/intro/intro";
import CategorySection from "@/components/section/category/category";
import { Suspense } from "react";

export default async function Home() {
  const categories = await serverClient.category.getAllCategories();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-4">
      <IntroSection />
      <div className="px-6">
        <Suspense fallback={<div>...Loading Category</div>}>
          <CategorySection data={categories} />
        </Suspense>
      </div>
      {/* <Carousel /> */}
      {/* <button onClick={() => handleClick()}>Click me</button> */}
    </main>
  );
}
