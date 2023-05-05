import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  ChannelDetailComp,
  FeedComp,
  NavbarComp,
  SearchFeedComp,
  VideoDetailComp,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<FeedComp />} />
        <Route path="/video/:id" element={<VideoDetailComp />} />
        <Route path="/channel/:id" element={<ChannelDetailComp />} />
        <Route path="/search/:searchTerm" element={<SearchFeedComp />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
