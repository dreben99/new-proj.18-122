import { useNavigate, useParams } from "react-router-dom"
import * as tacoService from '../services/tacoService'
import { useEffect, useState } from "react"
import useForm from "../hooks/useForm"

export default function Edit() {
    

    const navigate = useNavigate()
    const {tacoId} = useParams()
    const [taco, setTaco] = useState({})


    useEffect(() => {
        tacoService.getOne(tacoId)
        .then(result => {
            setTaco(result)
        })
    }, [tacoId])


    const editHandler = async (values) => {

        try {
            await tacoService.edit(tacoId, values)
            navigate('/tacos')
            console.log(taco);
        } catch (error) {
            console.log(error);
        }
    }


    

    const {values, onChange, onSubmit} = useForm(editHandler, taco)


    const isButtonDisabled = (
        values.bread === undefined ||
        values.meats === undefined ||
        values.salads === undefined ||
        values.cheese === undefined 
    );
      

    return(

        <section id="create-page" className="auth">
        <form id="create" onSubmit={onSubmit}>
            <div className="containers">
                <h1>Edit your Taco</h1>

                <label htmlFor="leg-title" >Custom</label>
                
                <label htmlFor="bread">Tortilla Bread Type</label>
                <select id="bread" name="bread"  value={values.bread} onChange={onChange}>
                    <option value='' hidden></option>
                    <option value="white">White Tortilla</option>
                    <option value="brown">Brown Tortilla with seeds</option>
                    <option value="corn">Corn Bread Tortilla</option>
                    
                </select>
            



           



                <label htmlFor="meats">Meat</label>
                <select id="meats" name="meats" value={values.meats} onChange={onChange} >
                <option value='' hidden></option>
                    <option value="beef">Beef</option>
                    <option value="pork">Pork</option>
                    <option value="chicken">Chicken</option>
                    <option value="fish">Tuna fish</option>
                </select>
             
                
    
                <label htmlFor="salads">Salads</label>
                <select id="salads" name="salads" value={values.salads} onChange={onChange}>
                <option value=''hidden ></option>
                    <option value="beans, tomatoes and corn">Tomato, Beans, Corn</option>
                    <option value="rice, avocado and cabbage">Avocado, Rice, Cabbage</option>
                    <option value="potato, beets and carrots">Beets, Potatoes, Carrot </option>
                </select>
    
              
    
                <label htmlFor="cheese">Cheese</label>
                <select id="cheese" name="cheese" value={values.cheese} onChange={onChange}>
                    <option value='' hidden></option>
                    <option value="cheddar">Cheddar</option>
                    <option value="mozzarella">Mozzarella</option>
                </select>

                <label htmlFor="desc">Add More:</label>
                    <textarea name="desc" id="desc" value={values.desc} onChange={onChange}></textarea>


                <input className="btn submit" type="submit" value="Edit Taco" disabled={isButtonDisabled} />
            </div>
        </form>
    </section>
    
    
    )
}