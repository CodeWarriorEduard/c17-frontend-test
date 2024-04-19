import './Cards.styles.css';

type datatype = {
    title: string,
    desc: string
}

const Cards: React.FC<datatype>= ({data}: datatype) =>{
    return(
        <div className='cards-container' data-aos="fade-right">
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
        </div>
    )
}

export default Cards;