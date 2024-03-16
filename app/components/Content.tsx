"use client";
import Statistics from "./Statistics";
import Social from "./Social";
import { useSelector } from "react-redux";
import { useEffect } from "react";
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

  return (
    <div
      className={`px-6 sm:px-0 transition-all ${
        found ? "scale-100" : "scale-0"
      }`}
    >
      <div className="w-full pb-[48px] relative mt-4 sm:mt-6 transition-all px-4 pt-8 sm:p-10 rounded-2xl bg-lightWhite dark:bg-darkDBlue">
        <div className="flex gap-5 mb-8 sm:mb-6 items-center">
          <div>
            <img
              src={allData?.avatar_url ? allData.avatar_url : "/avatar.png"}
              alt="avatar"
              className="w-[70px] sm:w-[117px] rounded-full"
            />
          </div>
          <div className="lg:flex items-start flex-grow justify-between">
            <article>
              <h1 className="capitalize sm:text-2xl text-lightBlack dark:text-white font-bold">
                {allData?.login}
              </h1>
              <a
                href={"github.com/" + allData?.login}
                target="_blank"
                className="text-darkBlue  lowercase text-[13px] sm:text-[16px]"
              >
                @{allData?.login}
              </a>
            </article>
            <span className="text-lightGray text-[13px] sm:text-base dark:text-white">
              {allData?.created_at}
            </span>
          </div>
        </div>

        <div className="lg:flex">
          <div className="lg:w-[140px] lg:h-32"></div>
          <div className="flex-grow">
            <p className="text-lightLGray capitalize text-[13px] sm:text-base dark:text-white">
              {allData?.bio?.length ? allData.bio : "Not avaible"}
            </p>
            <Statistics
              public_repos={allData?.public_repos}
              followers={allData?.followers}
              following={allData?.following}
            />
            <Social
              location={allData?.location}
              twitter_username={allData?.twitter_username}
              blog={allData?.blog}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
