const ParagraphBlock = ({ block }) => {
  const text = block.children?.map((child) => child.text).join("") || "";

  return <p className="mb-4">{text}</p>;
};

export default ParagraphBlock;
