import Lottie from "lottie-react";
import RightArrow from "../../assets/animations/right-arrow.json";

const RightCard = ({card}) => {
  return (
    <div className='h-full w-80 mx-3 rounded-xl shrink-0 overflow-hidden relative'>
      <img className='h-full w-full object-cover ' src={card.img} alt="" />
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between items-center '>
           <h1 className="bg-white w-15 h-15 p-1 rounded-full text-2xl fw-bold flex items-center justify-center">{card.int}</h1>
      
       <div >
        </div>
      <div >
         <p className="text-xl leading-normal text-white mb-10">{card.Para}
        </p>
        <div className="flex justify-between">
            <button className="bg-blue-600 flex text-center text-white font-semiboldm px-4 py-2 rounded-full text-lg">{card.btn}
        <Lottie className="h-8 w-15"
          animationData={RightArrow} 
          loop={true} 
          autoplay={true}
        /></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RightCard
