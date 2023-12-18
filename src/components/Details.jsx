import { useContext, useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom'
import * as tacoService from '../services/tacoService'
import * as commentService from '../services/commentService'
import AuthContext from '../context/authContext'
import { useNavigate } from "react-router-dom";


import '../css/DetailsPage.css'


export const cart = [{}]

export default function Details(desc){
    const navigate = useNavigate()


    const [purchaseMessageVisible, setPurchaseMessageVisible] = useState(false);

    const buyHandler = () => {
        setPurchaseMessageVisible(true);
        console.log(taco);
       
       cart.push(taco)
       console.log(cart);

      };
      

      useEffect(() => {
        let timeoutId;
    
        if (purchaseMessageVisible) {
          // Set a timeout to hide the message after 2 seconds
          timeoutId = setTimeout(() => {
            setPurchaseMessageVisible(false);
          }, 6000);
        }
    
        return () => {
          // Clear the timeout when the component unmounts or when purchaseMessageVisible changes
          clearTimeout(timeoutId);
        };
      }, [purchaseMessageVisible]);
    
    
    const [comments, setComments] = useState([])
    
    const [taco, setTaco] = useState({})
    const {tacoId,meats,img, ownerId, _id } = useParams();
    const {userId, username, email, } = useContext(AuthContext)


    let newPrice = Number(7.49)
if (taco.desc) {
    newPrice = 8.49
}else{
    newPrice = 7.49
}
    
    
    const getImageSrc = (meats) => {
        switch (taco.meats) {
            case 'beef':
                return 'https://thebakermama.com/wp-content/uploads/2022/03/IMG_0389-scaled.jpg';
            case 'chicken':
                return 'https://bellyfull.net/wp-content/uploads/2023/08/Slow-Cooker-Shredded-Chicken-Tacos-blog-3.jpg';
                case 'pork':
                    return 'https://www.atablefullofjoy.com/wp-content/uploads/2018/09/Carnitas-Tacos-Recipe-featured-9.jpg';
                    case 'fish':
                return 'https://i0.wp.com/chefsavvy.com/wp-content/uploads/easy-seared-ahi-tuna-tacos.jpg?w=665&ssl=1';
            default:
              
        }
    };


    const word = (meats) => {
        switch (taco.meats) {
            case 'beef':
                return 'Ground';
            case 'chicken':
                return 'Organic';
                case 'pork':
                    return 'Homegrown';
                    case 'fish':
                return 'Wild caught';
            default:
              
        }
    };
    
    useEffect(() => {
        tacoService.getOne(tacoId)
        .then(setTaco)
        console.log(taco.meats);


        commentService.getAll(tacoId)
        .then(result => setComments(result));
        console.log(comments);
        console.log(ownerId);
        
    },[tacoId])

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            tacoId,
            formData.get('comment'),
        );

        
        setComments(state => [...state, {...newComment, owner : {email} } ] );

    }

const deleteHandler = async () => {

        try {
            await tacoService.remove(tacoId)
            navigate('/tacos')
        } catch (error) {
            console.log(error);
        }
    }
    
    
    return(


            <div className="details-page">
              <h1>{taco.title || 'Custom Made'}</h1>
              <div className="details-container">
                <div className="image-container">
                  <img src={taco.img || getImageSrc()} />
                </div>
                <div className="info-container">
                    <div className="info-bar">
                    <div className="names">
                        
                    <h2>Name</h2>
                    <p>{taco.title || 'Custom Taco'}</p>
                    </div>
                    <div className="ingredients">

                  <h2>Ingredients</h2>
                  <p>{taco.description || `${word()} ${taco.meats} with ${taco.bread} tortilla, ${taco.cheese} cheese, ${taco.salads} garnish.`}</p>
                    </div>
                    <div className="price">

                  <h2>Price</h2>
                  <p>{taco.price || `${newPrice}$`}</p>
                    </div>
                  <div className="description">

                  <h2>Description:</h2>
                  <p>{taco.desc || 'You can add a mixture of fresh salads, spices and sauces.'}</p>
                  </div>
                  <div className="details-comments">

                    </div>
                      {userId && (
                           <div className="buyBtn">

                          <Link to className="button" onClick={buyHandler}>Add to Cart</Link>
                          {purchaseMessageVisible && (
        <p className="purchase-message show-message">Item added to Cart.</p>
        )}
                           </div>
                      )}
                        
                   {userId === taco._ownerId && (
                       <div className="buttons">
                       <Link to={`/tacos/${tacoId}/edit`} className="buttonEdit">Edit</Link>
                       <Link to={`/tacos/${tacoId}/delete`} className="buttonDel" onClick={deleteHandler} >Delete</Link>
                       </div>
                       )}
                         <div className="allComments">
                            
                           <h2>Comments:</h2>
                           
                           <ul>
                           <div className="coms">

                               
                           {comments.map(({ _id, text, owner:{email}, owner:{_ownerId},  }) => (
                                   <li key={_id} className="comment">
                                       <p>{ email}: {text}</p>
                                       {userId === taco._ownerId ? <button>
                                        delete
                                       </button> :  ( userId === taco._id ? <span>OK</span> : <span>NOt</span>)}
                                   </li>
                               ))}
                           </div>
                           </ul> 
                               {userId}
                               {comments._ownerId}
        
                           {comments.length === 0 && (
                               <p className="no-comment">No comments.</p>
                               )}
                         <ul>
{userId && (
    <div className="comments">
                        <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea name="comment" placeholder="Comment......" ></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
                       </div>
                       )}
                    </ul>
                </div>
              </div>
            </div>
                         </div>
                           </div>
                           
                           
          );
          
        
        
}