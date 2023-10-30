import { HomePageFilters } from "@/constants/filter";
import { Button } from "../ui/button";

const HomeFilter = () => {
  const active = "newest";

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === item.value
              ? "bg-primary-800 text-primary-500"
              : "background-light800_dark300 text-light-500"
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
