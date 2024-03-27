import Image from "next/image";
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <h1
          className="text-7xl mb-5 font-bold"
          style={{
            backgroundImage:
              "linear-gradient(to right, blue, red, orange, blue, green, red)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          nbGoogle
        </h1>
        <HomeSearch />
      </div>
    </>
  );
}
