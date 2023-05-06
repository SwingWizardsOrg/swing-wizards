import React from 'react'
import about1 from '../images/about1.png'
import about2 from '../images/about2.png'
import about3 from '../images/about3.png'

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-center gap-10 mb-5">
            <h3>&#10004; Free Investment</h3>
            <h3>&#10004; Free Education</h3>
            <h3>&#10004; A Great Community</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <button className="px-5 py-2 bg-blue-950 text-white rounded-xl">SIGN IN</button>
            <button className="px-5 py-3 bg-red-700 text-white rounded-xl">SIGN UP</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto p-4 text-white my-20">
          <div className="flex flex-wrap justify-evenly text-center items-center gap-5">
            <div className="border-8 border-blue-950 p-4 rounded-3xl">
              <div>
                <img width={300} height={500} src={about1} alt="about" />
              </div>
              <br />
              <div className="space-y-3">
                <h3>INVESTMENT APP</h3>
                <button className="px-5 py-2 bg-blue-950  rounded-lg"><a href="/#">GO</a></button>
              </div>
            </div>
            <div className="border-8 border-blue-950 p-4 rounded-3xl">
              <div>
                <img width={300} height={500} src={about2} alt="about" />
              </div>
              <br />
              <div className="space-y-3">
                <h3>TRADING</h3>
                <button className="px-5 py-2 bg-blue-950 rounded-lg"><a href="/#">GO</a></button>
              </div>
            </div>
            <div className="border-8 border-blue-950 p-4 rounded-3xl">
              <div>
                <img width={300} height={300} src={about3} alt="about" />
              </div>
              <br />
              <div className="space-y-3">
                <h3>COMMUNITY</h3>
                <button className="px-5 py-2 bg-blue-950 rounded-lg"><a href="/#">GO</a></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
