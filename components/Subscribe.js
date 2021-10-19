import { useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const subscribeMe = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email: email }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    const { error, message } = await res.json();
    console.log(error, message);
    if (error) {
      setError(error);
      setSuccess(null);
    } else {
      setError(null);
      setEmail("");
      setSuccess(message);
    }
  };

  const changeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  return (
    <section className="my-3">
      <div className="px-8 py-4 border border-gray-200 dark:border-none shadow-lg bg-gray-50 dark:bg-gray-800 rounded">
        <div className="flex items-center my-3">
          <FaEnvelopeOpenText className="w-12 h-12 mr-6 text-yellow-600" />
          <div className="card-text">
            <h1 className="text-xl md:text-2xl font-bold leading-tight">
              Want to know more about what I'm working on?
            </h1>
            <p className="text-base md:text-lg text-gray-400 mt-3 ">
              Join my newsletter to stay notified!
            </p>
          </div>
        </div>
        {success ? (
          <div class="p-3 rounded bg-green-50">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  class="w-5 h-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="ml-3">
                <div class="text-sm text-green-600">
                  <p>{success}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          error && (
            <div class="p-3 rounded bg-red-50">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg
                    class="w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <div class="text-sm text-red-600">
                    <p>{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
        <form
          onSubmit={subscribeMe}
          className="flex flex-col w-full mt-3 gap-2 md:justify-start md:flex-row"
        >
          <input
            onChange={changeEmail}
            className="flex-grow w-full px-4 py-3 mb-4 text-base text-black transition ease-in-out transform rounded-lg  duration-650 lg:w-auto bg-gray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
            placeholder="Your Email"
            type="email"
          />
          <button className="flex items-center px-6 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg  hover:bg-blue-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            Subscribe
          </button>
        </form>
        <p className="w-full mt-2 mb-8 text-sm text-left text-gray-400">
          Enter your email address and you'll be added to my newsletter
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
