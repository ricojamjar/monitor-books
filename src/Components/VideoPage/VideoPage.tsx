import React from "react";
import { RouteComponentProps } from "@reach/router";

import Video from "./Video";
import VideoTitle from "./VideoTitle";
import Text from "../Common/Text";
import { InfoSection } from "../Common/Common";

interface IProps extends RouteComponentProps {
  video: Video;
}

export default function VideoPage(props: IProps) {
  const { url, title, creator, description1, description2 } = props.video;
  return (
    <>
      <Video url={url} title={title} />
      <InfoSection>
        <VideoTitle title={title} subtitle={creator} />
        <Text leftText={description1} rightText={description2} />
      </InfoSection>
    </>
  );
}
