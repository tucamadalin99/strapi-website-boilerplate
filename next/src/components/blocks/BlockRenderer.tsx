import HeadingBlock from "./HeadingBlock";
import ParagraphBlock from "./ParagraphBlock";

const BlockRenderer = ({ block }) => {
  switch (block.type) {
    case "heading":
      return <HeadingBlock block={block} />;
    case "paragraph":
      return <ParagraphBlock block={block} />;
    default:
      return null;
  }
};

export default BlockRenderer;
