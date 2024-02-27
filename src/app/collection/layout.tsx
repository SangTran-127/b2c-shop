import FilterCollection from "@/components/sidebar/FilterCollection";
import Link from "next/link";
import React, { FC } from "react";

type CollectionLayoutProps = {
  children: React.ReactNode;
};

const CollectionLayout: FC<CollectionLayoutProps> = ({ children }) => {
  return (
    <section className="px-14">
      <div className="flex justify-between">
        <div className="border w-1/6">
          <div className="flex flex-col">
            <Link href="/collection">All</Link>
            <FilterCollection />
          </div>
        </div>
        <div className="border w-5/6">
          <div className="">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CollectionLayout;
