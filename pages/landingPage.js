import Image from 'next/image'
import humaan from '../public/home_img.svg'
import ImageSrcSet from '../components/ImageSrcSet'
import NavBar from '../components/NavBar'

export default function landingPage() {
  return (
    <>
      <div className="home">
        <NavBar/>
        <div className="row">
            <div className="col-sm-3 col-md-8 col-lg-8">
              <h1>EXPONENT AFRICA</h1>
              <p className="subtitle">Where Ideas Begin</p>
              <br/>
              <br/>
              <button className="button">EXPLORE</button>
              <br/>
              <br/>
            </div>
            <div className="col-sm-9 col-md-4 col-lg-4">
              <Image className="humaan" src={humaan} alt="Picture of girl sitting with a laptop on her lap."/>
            </div>
        </div>

      </div>
    </>
  )
}
