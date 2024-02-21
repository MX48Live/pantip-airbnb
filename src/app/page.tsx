import Github from "@/components/common/Github";
import CategorySwiper from "@/components/home/CategorySwiper";
import Footer from "@/components/home/Footer";
import TagHits from "@/components/home/TagHits";
import Recommend from "@/components/home/recommendation/Recommend";
import { tags_hits } from "@/data/tags";
import { foryou_topics } from "@/data/topics";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <CategorySwiper />
      <div className="container mx-auto px-4">
        <div className="mt-6">
          <div className="grid gap-10 lg:grid-cols-[600px_1fr] xl:grid-cols-[800px_1fr]">
            <div className="mb-0 lg:mb-20">
              <Recommend topic={foryou_topics} />
            </div>
            <div className="mb-10">
              <div className="mb-5 w-full rounded-3xl border p-6">
                <TagHits tags={tags_hits} />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <Github />
    </div>
  );
}
