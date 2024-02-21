import { TopicType } from "@/data/topics";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuStar } from "react-icons/lu";

function TopicTypeIcon({ type }: { type: TopicType }) {
  switch (type) {
    case "ask":
      return (
        <div className="mt-1 text-xl text-color-primary">
          <FaRegQuestionCircle />
        </div>
      );
    case "discuss":
      return (
        <div className="mt-1 text-xl text-color-primary">
          <IoChatbubbleEllipsesOutline />
        </div>
      );
    case "cr":
      return (
        <div className="mt-1 text-xl text-color-primary">
          <LuStar />
        </div>
      );
  }
}

export default TopicTypeIcon;
