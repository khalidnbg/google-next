import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="flex justify-between items-center p-5 text-sm">
      <h3
        className="text-3xl font-bold"
        style={{
          backgroundImage:
            "linear-gradient(to right, blue, red, orange, blue, green, red)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
        nbGoogle
      </h3>

      <div className="flex space-x-4 items-center">
        <Link className="hover:underline" href={"https://mail.google.com"}>
          Gmail
        </Link>{" "}
        <Link className="hover:underline" href={"https://image.google.com"}>
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}
