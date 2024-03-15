import React from "react";

interface dataT {
  public_repos?: number;
  followers?: number;
  following?: number;
}

const Statistics: React.FC<dataT> = ({
  public_repos,
  followers,
  following,
}) => {
  return (
    <div className="rounded-[10px] max-h-[85px] bg-lightGrey transition-all dark:bg-darkBlack mt-5 px-4 py-[18px] flex items-center justify-around">
      <article className="grid gap-2 text-center">
        <span className="text-[11px] text-lightLGray sm:text-[13px] dark:text-white">
          Repos
        </span>
        <p className="text-lightBlack text-base font-bold sm:text-xl dark:text-white">
          {public_repos}
        </p>
      </article>
      <article className="grid gap-2 text-center">
        <span className="text-[11px] text-lightLGray sm:text-[13px] dark:text-white">
          Followers
        </span>
        <p className="text-lightBlack text-base sm:text-xl font-bold dark:text-white">
          {followers}
        </p>
      </article>
      <article className="grid gap-2 text-center">
        <span className="text-[11px] text-lightLGray sm:text-[13px] dark:text-white">
          Following
        </span>
        <p className="text-lightBlack font-bold text-base sm:text-xl dark:text-white">
          {following}
        </p>
      </article>
    </div>
  );
};

export default Statistics;
