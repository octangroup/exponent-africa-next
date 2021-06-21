import banner from "../public/background.png"
import Image from 'next/image'

function ImageSrcSet() {
    return (
        <>
           <Image className="banner" layout="fixed" src={banner} alt="beige background"/>
        </>
    )
}

export default ImageSrcSet
