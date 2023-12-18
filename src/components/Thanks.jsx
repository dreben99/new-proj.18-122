import { Link } from 'react-router-dom'
import '../css/Thanks.css'

export default function Thanks(){


    return(
<>
        <div>

            <img style={{  width: '100vw',
  height: '100vh', objectFit: 'cover'  }} src="https://c0.wallpaperflare.com/preview/486/591/703/taco-chef-cartoon-kitchen.jpg"></img>
            <div className="overlay-text">
        <h1>Thank you for your purchase!</h1>
        <Link to={'/'}>if you wish to keep browsing more...</Link>
      </div>         
        </div>
</>
    )
}