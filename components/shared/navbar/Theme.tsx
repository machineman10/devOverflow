"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {theme && theme === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              width={20}
              height={20}
              alt="sun"
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              width={20}
              height={20}
              alt="moon"
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="background-light800_dark300 absolute right-[-3rem] mt-3 max-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className="hover:background-light900_dark200 flex cursor-pointer items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              onClick={() => {
                setTheme(item.value);
              }}
            >
              <Image
                src={item.icon}
                width={16}
                height={16}
                alt={item.value}
                className={`${theme === item.value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  theme === item.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
