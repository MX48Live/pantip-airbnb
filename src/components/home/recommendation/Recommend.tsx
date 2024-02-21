import { ForyouTopicType } from "@/data/topics";
import { FaRegComments } from "react-icons/fa6";
import TopicTypeIcon from "./TopicTypeIcon";
import Link from "next/link";
import cn from "@/utils/cn";
import Image from "next/image";
import DateTime from "./DateTime";

function Recommend({ topic }: { topic: ForyouTopicType[] }) {
  return (
    <>
      {topic.map((item) => (
        <div
          key={item.id}
          className={cn(
            `mb-8 border-b pb-8`,
            item.thumbnail &&
              "grid grid-cols-[100px_1fr] gap-4 md:grid-cols-[1fr_200px]",
          )}
        >
          {item.thumbnail && (
            <div className="relative h-[70px] w-[100px] md:hidden">
              <Image alt={item.title} src={item.thumbnail} fill={true} />
            </div>
          )}
          <div>
            {/* .Title */}
            <div className="flex gap-2">
              <TopicTypeIcon type={item.type} />
              <h2 className="mb-1 text-[18px] font-bold text-color-base">
                <Link href="#" className="hover:text-color-primary">
                  {item.title}
                </Link>
              </h2>
            </div>
            <div className="ml-7 ">
              {/* .Description */}
              <p className="line-clamp-4 text-color-light">{item.desc}</p>

              {/* .Date, Name, comment */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="mt-2 inline-block text-color-base">
                    <DateTime date={item.dateTime} />
                  </div>
                  <div className="flex pt-3">•</div>
                  <div className="mt-2 inline-block text-color-base hover:underline">
                    <Link href="#">{item.by}</Link>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaRegComments />
                  </span>
                  <span>{item.comments || 0}</span>
                </div>
              </div>

              {/* .tags */}
              {item.tags && (
                <div className="ml-[-6px] mt-1 flex flex-wrap text-[12px] text-color-light">
                  {item.tags.map((item: string, index: number) => (
                    <Link
                      href="#"
                      key={index}
                      className=" rounded-full px-2 py-1 hover:bg-button-hover"
                    >
                      #{item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          {item.thumbnail && (
            <div className="relative hidden md:block md:h-[140px] md:w-[200px]">
              <Image alt={item.title} src={item.thumbnail} fill={true} />
            </div>
          )}
        </div>
      ))}
      <button className="flex w-full items-center justify-center rounded-full bg-color-primary/10 px-3 py-3 text-center text-color-primary hover:bg-color-primary hover:text-white">
        <span>ดูเพิ่มเติม</span>
      </button>
    </>
  );
}

export default Recommend;
