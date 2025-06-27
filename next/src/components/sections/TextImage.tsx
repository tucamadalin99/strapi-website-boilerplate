type TextImageProps = {
  text: string;
  image?: { url: string };
  imagePosition?: "left" | "right";
};

export default function TextImage({
  text,
  image,
  imagePosition = "right",
}: TextImageProps) {
  return (
    <section
      className="text-image"
      style={{
        display: "flex",
        flexDirection: imagePosition === "left" ? "row-reverse" : "row",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <div style={{ flex: 1 }}>
        <p>{text}</p>
      </div>
      {image?.url && (
        <img src={image.url} alt="" style={{ flex: 1, maxWidth: "100%" }} />
      )}
    </section>
  );
}
