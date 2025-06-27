import { JSX } from "react";

const HeadingBlock = ({ block }) => {
  const text = block.children?.map((child) => child.text).join("") || "";
  const level = block.level || 1;
  const Tag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;

  return <Tag className="font-bold my-4">{text}</Tag>;
};

export default HeadingBlock;
