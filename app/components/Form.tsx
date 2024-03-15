"use client";

import { useState } from "react";
import Input from "./Input";
import SearchBtn from "./SearchBtn";
import { useDispatch } from "react-redux";
import app from "../redux/appSlice";
const baseUrl = "https://api.github.com/users/";

interface Stucture {
  avatar_url?: string;
  bio?: any;
  blog?: string;
  company?: any;
  created_at?: string;
  email?: any;
  events_url?: string;
  followers?: number;
  followers_url?: string;
  following?: number;
  following_url?: string;
  gists_url?: string;
  gravatar_id?: string;
  hireable?: any;
  html_url?: string;
  id?: number;
  location?: any;
  login?: string;
  name?: any;
  node_id?: string;
  organizations_url?: string;
  public_gists?: number;
  public_repos?: number;
  received_events_url?: string;
  repos_url?: string;
  site_admin?: boolean;
  starred_url?: string;
  subscriptions_url?: string;
  twitter_username?: any;
  type?: string;
  updated_at?: string;
  url?: string;
  message?: string | undefined;
}

const Form = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    const req = await fetch(baseUrl + text);
    const res = await req.json();
    dispatch(app.actions.giveData(res));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="relative container px-6 sm:px-0"
    >
      <img
        src="/icon-search.svg"
        alt="search-icon"
        className="absolute top-2/4 -translate-y-2/4 left-10 sm:left-5"
      />
      <Input setText={setText} />
      <SearchBtn className="bg-lightBlue  sm:text-base sm:px-6 sm:right-2">
        Search
      </SearchBtn>
    </form>
  );
};

export default Form;
