import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/home/HomeFilter";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Introduction to TypeScript",
    tags: [
      { _id: "101", name: "Programming" },
      { _id: "102", name: "TypeScript" },
    ],
    author: {
      _id: "201",
      name: "John Doe",
      picture: "profile-picture-url-1",
    },
    upvotes: 1050,
    views: 5000000099,
    answers: [
      { content: "Example answer 1", author: "Alice" },
      { content: "Example answer 2", author: "Bob" },
    ],
    createdAt: new Date("2023-10-01"),
  },
  {
    _id: "2",
    title: "React Hooks Tutorial",
    tags: [
      { _id: "103", name: "Web Development" },
      { _id: "104", name: "React" },
    ],
    author: {
      _id: "202",
      name: "Jane Smith",
      picture: "profile-picture-url-2",
    },
    upvotes: 45,
    views: 700,
    answers: [{ content: "Example answer 1", author: "Charlie" }],
    createdAt: new Date("2023-09-15"),
  },
  {
    _id: "3",
    title: "Data Structures and Algorithms in Python",
    tags: [
      { _id: "105", name: "Programming" },
      { _id: "106", name: "Python" },
    ],
    author: {
      _id: "203",
      name: "Eva Johnson",
      picture: "profile-picture-url-3",
    },
    upvotes: 55,
    views: 1000,
    answers: [],
    createdAt: new Date("2023-08-20"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgUrl="/assets/icons/search.svg"
          placeholder="Search question"
          className="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          containerClasses="hidden max-md:flex"
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>
      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((q) => (
            <QuestionCard
              key={q._id}
              _id={q._id}
              title={q.title}
              tags={q.tags}
              author={q.author}
              upvotes={q.upvotes}
              views={q.views}
              answers={q.answers}
              createdAt={q.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            url="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
