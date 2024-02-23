import { serverClient } from "./_trpc/serverClient";
import IntroSection from "@/components/section/intro/intro";
import CategorySection from "@/components/section/category/category";
import { Suspense } from "react";

export default async function Home() {
  const categories = await serverClient.category.getAllCategories();
  //  ^?
  console.log(categories);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-4">
      <IntroSection />
      <Suspense fallback={<div>...Loading Category</div>}>
        <CategorySection />
      </Suspense>
      {/* <Carousel /> */}
      {/* <button onClick={() => handleClick()}>Click me</button> */}
    </main>
  );
}
