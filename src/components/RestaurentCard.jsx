import { CDN_URL } from "../utils/constants";

const styleCard={
    backgroundColor :"#f0f0f0"
}

const RestaurentCard=(props)=>{
    const {resdata}=props;
    // console.log(resdata)
    const {
        cloudinaryImageIda,
        name,
        avgRating,
        cuisines,

    }=resdata?.info;
    // console.log(props);
    
    return (
    <div data-testid="resCard" className="m-2 sm:m-4 p-2 sm:p-4 w-full sm:w-[250px] h-[350px] sm:h-[450px] rounded-lg bg-slate-400 hover:bg-gray-100 hover:border-2 flex flex-col items-center break-words overflow-hidden" >
         {/* style={styleCard} */}
            <img className="rounded-lg h-[150px] sm:h-[250px] w-full object-cover" alt="res-logo" src={CDN_URL+resdata.info.cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg w-full text-center break-words">{name}</h3>
            <h4 className="w-full text-center break-words whitespace-pre-line">{resdata.info.cuisines.join(', ')}</h4>
            <h4 className="w-full text-center">{resdata.info.avgRating}</h4>
            {/* <h4>{avgRatingString}</h4> */}
            <h4 className="w-full text-center">{resdata.info.sla.deliveryTime}-min</h4>
        </div>

    );
};

export const withPromtedLabel=(RestaurentCard)=>{
    return (props)=>{
      
        return (
        <div>
            <label className="absolute bg-black text-white m-2 mt-[-2] p-2 rounded-lg hover:rotate-45">Promoted</label>
            <RestaurentCard {...props}/>
        </div>
        );
    }
}
export default RestaurentCard;