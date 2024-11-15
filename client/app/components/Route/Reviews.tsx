"use client";
import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewsCard from "../Review/ReviewsCard";

type Props = {};

export const reviews = [
    // mock data
    {
        name: "Geene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambrige university",
        comment:
          "LoreAlias co laum fuga voluptatum labore cupiditate odit sit sint, perferendis impedit asperiores nihil, ut dicta distinctio amet expedita. Repellendus debitis ea quam quis nobis quos? Velit, enim!",
      },
      {
        name: "Geene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambrige university",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum repellat unde sed, error doloribus. Alias consequuntur nam vitae aliquam, eos recusandae rem laudantium quisquam fuga voluptatum labore cupiditate odit sit sint, perferendis impedit asperiores nihil, ut dicta distinctio amet expedita. Repellendus debitis ea quam quis nobis quos? Velit, enim!",
      },
      {
        name: "Geene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambrige university",
        comment:
          "Loremm ipsum dolor sit aamet consectetur adipisicing em ipsum dolor sit amet consectetur adipisicing e ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum repellat unde sed, error doloribus. Alias consequuntur nam vitae aliquam, eos recusandae rem laudantium quisquam fuga voluptatum labore cupiditate odit sit sint, perferendis impedit asperiores nihil, ut dicta distinctio amet expedita. Repellendus debitis ea quam quis nobiamet consectetur adipisicing em ipsum dolor sit amet consectetur adipisicing e ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum repellat unde sed, error doloribus. Alias consequuntur nam vitae aliquam, eos recusandae rem laudantium quisquam fuga voluptatum labore cupiditate odit sit sint, perferendis impedit asperiores nihil, ut dicta distinctio amet expedita. Repellendus debitis ea quam quis nobimet consectetur adipisicing em ipsum dolor sit amet consectetur adipisicing e ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum repellat unde sed, error doloribus. Alias consequuntur nam vitae aliquam, eos recusandae rem laudantium quisquam fuga voluptatum labore cupiditate odit sit sint, perferendis impedit asperiores nihil, ut dicta distinctio amet expedita. Repellendus debitis ea quam quis nobis quos? Velit, enim!",
      },
      {
        name: "Geene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambrige university",
        comment:
          "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum repellat unde sed, error doloribus. Alias consequuntur nam vitae aliquam, eos recusandae rem laudantium quisquam fuga voluptatum labore cupiditate odit sit sint, perferendis impedit asperiores nihil, ut dicta distinctio amet expedita. Repellendus debitis ea quam quis nobis quos? Veipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum repellat unde sed, error doloribus. Alias consequuntur nam vitae aliquam, eos recusandae rem laudantium quisquam fuga voluptatum labore cupiditate odit sit sint, perferendis impedit asperiores nihil, ut dicta distinctio amet expedita. Repellendus debitis ea quam quis nobis quos? Velit, enim!",
      },
      {
        name: "Geene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambrige university",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum repellat unde sed, error doloribus. Alias consequuntur nam vitae aliquam, eos recusandae rem laudantium quisquam fuga voluptatum labore cupiditate odit sit sint, perferendis impedit asperiores nihil, ut dicta distinctio amet expedita. Repellendus debitis ea quam quis nobis quos? Velit, enim!",
      },
      {
        name: "Geene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambrige university",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum repellat unde sed, error doloribus. Alias consequuntur nam vitae aliquam, eos recusandae rem laudantium quisquam fuga voluptatum labore cupiditate odit sit sint, perferendis impedit asperiores nihil, ut dicta distinctio amet expedita. Repellendus debitis ea quam quis nobis quos? Velit, enim!",
      },
    ];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assets/art.jpg")}
            alt="businnes"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our students are <span className="text-gradient">our strength</span>
            <br />
            See what they say about us
          </h3>
          <p className={`${styles.label}`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            dolorem, consequuntur vitae facilis minima earum, doloribus nemo
            quisquam, ducimus perferendis qui quos. Iste facilis totam illo,
            placeat alias atque voluptas.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:mt-[-40px]">
        {reviews &&
          reviews.map((i, index) => <ReviewsCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;