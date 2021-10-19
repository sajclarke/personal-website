export default function WhoAmI() {
  return (
    <div className="mx-auto px-4">
      <main className="text-gray-600 dark:text-gray-400">
        <section className="max-w-5xl mb-10 body-font overflow-hidden">
          <div className="flex flex-col flex-col-reverse md:flex-row md:items-center">
            <div className=" my-10 md:my-5 flex flex-col items-start">
              <span className="inline-block py-1 px-3 rounded bg-indigo-100 text-indigo-500 text-sm font-medium tracking-widest">
                About me
              </span>
              <h1 className=" title-font text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 my-4">
                Who Am I?
              </h1>
              <p className="leading-relaxed mb-8">
                I am a tech entrepreneur and passionate about developing high
                quality technology solutions to improve quality of life in the
                Caribbean and the developing world. I have a personal mission to
                always leave a positive impact on those I meet directly and
                indirectly.
              </p>
              <h2 className="sm:text-3xl text-2xl title-font font-medium my-4">
                My Background
              </h2>
              <p className="leading-relaxed mb-8">
                I've always enjoyed the process of bringing an idea from concept
                to reality which has led me to creating visual arts, electronic
                circuits and more recently, computer software. I am particularly
                obsessed with ideas that can empower people to live better
                lives.
              </p>
              <p className="leading-relaxed mb-8">
                I started my professional career as a trained electrical
                engineer for seven years however I was unable to resist the urge
                to transition to the fast-paced software industry where it is
                possible to immediately observe the positive impact of a
                technology creation on the lives of others
              </p>
              <h2 className="sm:text-3xl text-2xl title-font font-medium my-4">
                What I'm currently working on
              </h2>
              <p className="leading-relaxed mb-8">
                I am currently developing custom business software at{" "}
                <a target="_blank" href="https://www.webstart101.com">
                  Webstart
                </a>{" "}
                and{" "}
                <a target="_blank" href="https://www.carepoint.co">
                  Carepoint.co
                </a>
                , a healthtech startup helping doctors to provide remote care to
                patients inbetween visits. I previously worked as an electrical
                engineer at Barbados Light and Power and has won regional and
                international awards for his innovations.
              </p>
              <p className="leading-relaxed mb-8">
                In my spare time, I give back by mentoring the next generation
                of software developers within the nascent developer community{" "}
                <a target="_blank" href="https://www.barcode.network">
                  Barcode
                </a>{" "}
                based in Barbados
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
