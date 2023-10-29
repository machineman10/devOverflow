import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  tag: string;
  count?: number;
  showCount?: boolean;
}

const RenderTag = ({ tag, count, showCount }: Props) => {
  return (
    <Link href="#" className="flex-between flex gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {tag}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{count}</p>
      )}
    </Link>
  );
};

export default RenderTag;
