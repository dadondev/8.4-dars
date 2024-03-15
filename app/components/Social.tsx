const Social = () => {
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
          San Francisco
        </span>
      </article>
      <article className="flex items-center gap-4">
        <img
          //   className={true ? " dark:text-white" : "text-gray-200"}
          className="text-white"
          src="/url.svg"
          alt="location"
        />
        <span className="text-lightLGray text-sm sm:text-base dark:text-white">
          https://github.blog
        </span>
      </article>
      <article className="flex items-center gap-4">
        <img
          //   className={true ? " dark:text-white" : "text-gray-200"}
          className="text-white"
          src="/twit.png"
          alt="location"
        />
        <span className="text-lightLGray text-sm sm:text-base dark:text-white">
          Not Available
        </span>
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
