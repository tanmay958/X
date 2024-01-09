import React from "react";
const BlueHashtags = (text: string) => {
  const tweetText = "This is a tweet with #ReactJS and #BlueColor.";

  const words = tweetText.split(" ");

  const styledWords = words.map((word, index) =>
    word.startsWith("#") ? (
      <span key={index} style={{ color: "blue" }}>
        {word}{" "}
      </span>
    ) : (
      <span key={index}>{word} </span>
    )
  );

  return <div>{styledWords}</div>;
};

export default BlueHashtags;
