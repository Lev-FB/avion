import './Form.css'

type Props ={
    checkbox:boolean,
    name:string
}

const Form =({checkbox,name}:Props) =>{
    const checkboxText:Array<string> = ['Exclusive offers','Free events','Large discounts']

    return (

        <div className={`${name}`}>
            <div className={`${name}__wrapper`}>
                <div className={`${name}__text`}>
                    <h3 className={`${name}__title`}>Join the club and get the benefits</h3>
                    <p className={`${name}__subtitle`}>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                </div>
                {checkbox&&(
                    <div className={`${name}__checkbox-wrapper`}>
                        {checkboxText.map((el,index)=>{
                        return (
                            <div key={index} className={`${name}__checkbox`}>
                                <input type="checkbox" value={el}/>
                                <label  className={`${name}__checkbox-text`}>{el}</label>
                            </div>
                        )
                        })}
                    </div>
                )}
                <form className={`${name}__form`}>
                    <input className={`${name}__input`} placeholder='your@email.com' type="text"/>
                    <button className={`${name}__submit`}>Sign up</button>
                </form>
            </div> 
        </div>
    )

}

export default Form