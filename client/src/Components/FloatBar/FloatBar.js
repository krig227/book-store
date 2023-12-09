import React from "react";
import "./Index.css";
import {
  NotifyIcon,
  AccessibilityIcon,
  AccountOn,
  HeartIcon,
  ChatbotIcon,
  HelpIcon,
  ContinueReadingIcon,
} from "../../Icons/Icon";

const FloatBar = () => {
  return (
    <div className="Left-FloatBar">
      <NotifyIcon />
      <AccountOn />
      <AccessibilityIcon />
      <HeartIcon />
      <HelpIcon />
      <ContinueReadingIcon />
      <ChatbotIcon />
    </div>
  );
};

export default FloatBar;
