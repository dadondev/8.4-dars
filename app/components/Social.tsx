interface data {
  location?: string | null;
  twitter_username?: string | null;
  blog?: string;
}

const Social: React.FC<data> = ({ location, twitter_username, blog }) => {
  return (
    <div className="grid gap-4 mt-6 gap-4 sm:grid-cols-2 sm:mt-8">
      <article className="flex items-center gap-5">
        <img
          //   className={true ? " dark:text-white" : "text-gray-200"}
          className="text-white"
          src="/loc.svg"
          alt="location"
        />
        <span className="text-lightLGray text-sm sm:text-base dark:text-white">
          {location ? location : "Not avaible"}
        </span>
      </article>
      <article className="flex items-center gap-4">
        <img
          //   className={true ? " dark:text-white" : "text-gray-200"}
          className="text-white"
          src="/url.svg"
          alt="location"
        />
        <a
          href={blog}
          className="text-lightLGray text-sm sm:text-base dark:text-white"
        >
          https://github.blog
        </a>
      </article>
      <article className="flex items-center gap-4">
        <img
          //   className={true ? " dark:text-white" : "text-gray-200"}
          className="text-white"
          src="/twit.png"
          alt="location"
        />
        <a
          href={twitter_username ? twitter_username : ""}
          className="text-lightLGray text-sm sm:text-base dark:text-white"
        >
          {twitter_username ? twitter_username : "Not Available"}
        </a>
      </article>
      <article className="flex items-center gap-4">
        <img
          //   className={true ? " dark:text-white" : "text-gray-200"}
          className="text-white"
          src="/git.png"
          alt="location"
        />
        <span className="text-lightLGray text-sm sm:text-base dark:text-white">
          @github
        </span>
      </article>
    </div>
  );
};

export default Social;
