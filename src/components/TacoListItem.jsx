import { NavLink, Link} from 'react-router-dom'
import '../css/Tacos.css'


export default function TacoListItem({
    _id,
    img,
    title,
    description,
    price,
    meats,
    desc,
    
}) {

let newPrice = Number(7.49)
if (desc) {
    newPrice++
}


    const getImageSrc = (img) => {
        switch (meats) {
            case 'beef':
                return 'https://thebakermama.com/wp-content/uploads/2022/03/IMG_0389-scaled.jpg';
            case 'chicken':
                return 'https://bellyfull.net/wp-content/uploads/2023/08/Slow-Cooker-Shredded-Chicken-Tacos-blog-3.jpg';
                case 'pork':
                    return 'https://www.atablefullofjoy.com/wp-content/uploads/2018/09/Carnitas-Tacos-Recipe-featured-9.jpg';
                    case 'fish':
                return 'https://i0.wp.com/chefsavvy.com/wp-content/uploads/easy-seared-ahi-tuna-tacos.jpg?w=665&ssl=1';
            default:
                return 'default-image-source.jpg';
        }
    };
    


    return (
        <>
        <div className="card">
            <div className='title-container'>
     <h2>{title || 'Custom Made'}</h2>
            </div>
            <div className='description-container'>
       
    <img
        src={img || getImageSrc()}
        alt="CUSTOM MADE"
        />
        <h3>{price || `${newPrice}$`}</h3>
        </div>
    <p></p>
    <div className="btnBox">
        <div className="button-container">
            <NavLink to={`/tacos/${_id}`} className='readMore'>
                Buy
            </NavLink>
        </div>
    </div>
</div>

        </>
    )
}