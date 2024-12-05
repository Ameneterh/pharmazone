import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-2xl font-medium text-blue-950">Subscribe now</p>
      <p className="text-gray-500 mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero amet
        nam minus dolor rem temporibus optio, vero perspiciatis nisi dolore
        mollitia sit eveniet unde cum quo soluta dignissimos error iusto!
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-blue-950 text-white text-xs px-10 py-4 rounded"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
