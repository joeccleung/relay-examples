import * as React from "react";
import Card from "./Card";
import Heading from "./Heading";
import PersonalByline, { type Props as PosterProps } from "./PersonalByline";
import StorySummary from "./StorySummary";
import Timestamp from "./Timestamp";
import Image from "./Image";

type Props = {
  story: {
    title: string;
    summary: string;
    thumbnail: {
      url: string,
    };
    author: PosterProps["person"];
  };
};

export default function Story({ story }: Props): React.ReactElement {
  return (
    <Card>
      <PersonalByline person={story.author} />
      <Heading>{story.title}</Heading>
      <Timestamp time={new Date()} />
      <Image image={story.thumbnail.url} description={story.title} width={400} height={400} />
      <StorySummary summary={story.summary} />
    </Card>
  );
}