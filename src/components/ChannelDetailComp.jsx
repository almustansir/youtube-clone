import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard, VideosComp } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const ChannelDetailComp = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const {id} = useParams()

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=> setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      .then((data)=> setVideos(data?.items))

  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '300px',
            background: "linear-gradient(17deg, rgba(69,69,107,1) 0%, rgba(74,74,124,1) 20%, rgba(82,82,147,1) 40%, rgba(91,91,175,1) 60%, rgba(87,87,193,1) 80%, rgba(91,91,244,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: {sm: '100px'} }} />
          <VideosComp videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetailComp