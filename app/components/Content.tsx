"use client";
import Statistics from "./Statistics";
import Social from "./Social";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

const Content = () => {
  const found = useSelector((state: { found: boolean }) => state.found);
  const allData = useSelector((state: { data: Stucture }) => state.data);

  useEffect(() => {
    console.log(allData);
  }, [allData]);
  return (
    <div className={`px-6 sm:px-0 transition-all scale-100`}>
      <div className="w-full pb-[48px] relative mt-4 sm:mt-6 transition-all px-4 pt-8 sm:p-10 rounded-2xl bg-lightWhite dark:bg-darkDBlue">
        <div className="flex gap-5 mb-8 sm:mb-6 items-center">
          <div>
            <img
              src={found ? allData?.avatar_url : "/avatar.png"}
              alt="avatar"
              className="w-[70px] sm:w-[117px] rounded-full"
            />
          </div>
          <div className="lg:flex items-start flex-grow justify-between">
            <article>
              <h1 className="capitalize sm:text-2xl text-lightBlack dark:text-white font-bold">
                The Octocat
              </h1>
              <a
                href="github.com/"
                target="_blank"
                className="text-darkBlue  lowercase text-[13px] sm:text-[16px]"
              >
                @octocat
              </a>
            </article>
            <span className="text-lightGray text-[13px] sm:text-base dark:text-white">
              Joined 25 Jan 2011
            </span>
          </div>
        </div>

        <div className="flex">
          <div className="lg:w-[244px] lg:h-32"></div>
          <div>
            <p className="text-lightLGray text-[13px] sm:text-base dark:text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>
            <Statistics />
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
