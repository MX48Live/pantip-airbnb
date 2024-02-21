"use client";
import "swiper/css";
import SwiperCore from "swiper";
import Link from "next/link";
import { GiPlainCircle } from "react-icons/gi";
import { category } from "@/data/category";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "@/utils/cn";
import { Navigation } from "swiper/modules";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";

SwiperCore.use([Navigation]);

function handleActive(id: number, cn: string) {
  if (id === 1) {
    return cn;
  }
}

function CategorySwiper() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative">
        <div className="py-4">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            pagination={{ clickable: true, dynamicBullets: true }}
          >
            {category.map((item) => (
              <SwiperSlide
                key={item.id}
                className={cn(
                  item.id == 1 && "md:ml-[50px]",
                  item.id == category.length && "md:mr-[50px]",
                )}
              >
                <div className="flex w-[80px] items-center justify-center">
                  <Link
                    href={`#`}
                    className={cn(
                      `inline-flex flex-col items-center justify-center gap-2 border-b-2 border-white py-2 text-[12px] text-color-light transition-all duration-300 ease-in-out hover:border-color-light hover:text-color-primary`,
                      handleActive(
                        item.id,
                        "border-color-primary text-color-primary",
                      ),
                    )}
                  >
                    <div
                      className={cn(
                        `text-[30px] opacity-20`,
                        handleActive(item.id, "opacity-60"),
                      )}
                    >
                      <GiPlainCircle />
                    </div>
                    <div className="inline-block">{item.name}</div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="arrow-right absolute left-0 top-0 z-[99] hidden h-full w-[100px] items-center bg-gradient-to-r from-white text-[30px] md:flex">
          <button className="rounded-full hover:bg-color-border hover:shadow-lg ">
            <CiCircleChevLeft />
          </button>
        </div>
        <div className="arrow-left arrow absolute right-0 top-0 z-[99] hidden h-full w-[100px] items-center justify-end bg-gradient-to-r from-transparent to-white text-[30px] md:flex">
          <button className="rounded-full hover:bg-color-border hover:shadow-lg ">
            <CiCircleChevRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategorySwiper;
