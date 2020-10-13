import React from "react";
import "./SidebarChannel.css";
import { useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { setChannelId } from "./features/appSlice";
import { setChannelInfo } from "./features/appSlice";

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash"># {channelName}</span>
      </h4>
    </div>
  );
}

export default SidebarChannel;
