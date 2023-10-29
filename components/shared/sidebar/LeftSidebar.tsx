"use client";

import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <section className="background-light900_dark200 custom-scrollbar light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                width={20}
                height={20}
                alt={item.label}
                className={`${!isActive && "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-2">
          <Link href="/sign-in">
            <Button className=" no-focus small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                width={20}
                height={20}
                alt="signin"
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Sign In
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium text-dark400_light900 light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                width={20}
                height={20}
                alt="signup"
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <Link
          href="/sign-out"
          className="text-dark300_light900 flex items-center justify-start gap-4 bg-transparent p-4"
        >
          <Image
            src="/assets/icons/account.svg"
            width={20}
            height={20}
            alt="logout"
            className="invert-colors"
          />
          <p className="hidden sm:block">Logout</p>
        </Link>
      </SignedIn>
    </section>
  );
};

export default LeftSidebar;
