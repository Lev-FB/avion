import './BtnViewCollection.css'

type props ={
    nameForClass:string
}


const BtnViewCollection = ({nameForClass}:props):JSX.Element =>{

    return (
        <div className="button-wrapper">
            <button className={`${nameForClass}  button-wrapper__view-collection`}>View collection</button>
        </div>
    )


}

export default BtnViewCollection