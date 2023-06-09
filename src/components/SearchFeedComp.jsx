import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import {VideosComp} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeedComp = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
    <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          Search results for: <span style={{ color: '#f31503' }}>{searchTerm}</span> videos.
        </Typography>
        <Box display="flex">
          <Box sx={{ mr: { sm: '100px' } }}/>
          {<VideosComp videos={videos} />}
      </Box>
      </Box>
  )
}

export default SearchFeedComp