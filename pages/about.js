export default function WhoAmI() {
  return (
    <div className="mx-auto px-4">
      <main>
        <section className="max-w-5xl mb-10 text-gray-700 body-font overflow-hidden">

          <div className="flex flex-col flex-col-reverse md:flex-row md:items-center">

            <div className=" my-10 md:my-5 flex flex-col items-start">
              <span className="inline-block py-1 px-3 rounded bg-indigo-100 text-indigo-500 text-sm font-medium tracking-widest">Welcome to my corner of the internet</span>
              <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 my-4">Who Am I?</h1>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 my-4"></h2>
              <p className="leading-relaxed mb-8">I am a tech entrepreneur and passionate about a future where modern technology solutions are actively developed by the Caribbean to improve our quality of life.</p>
              <p className="leading-relaxed mb-8">I am currently developing custom business software at <a className="p-1 hover:bg-indigo-100 text-indigo-500 font-medium rounded" target="_blank" href="https://www.webstart101.com">Webstart</a> and <a className="p-1 hover:bg-indigo-100 text-indigo-500 font-medium rounded" target="_blank" href="https://www.carepoint.co">Carepoint.co</a>, a healthtech startup helping doctors to provide remote care to patients inbetween visits. I previously worked as an electrical engineer at Barbados Light and Power and has won regional and international awards for his innovations.</p>
              <p className="leading-relaxed mb-8">I am also the Lead of the Facebook Developer Circles Bridgetown where we mentor and train the next generation of software developers within the nascent developer community <a className="p-1 hover:bg-indigo-100 text-indigo-500 font-medium rounded" target="_blank" href="https://www.barcode.network">Barcode</a></p>

            </div>

          </div>

        </section>


      </main>
    </div>
  )
}
