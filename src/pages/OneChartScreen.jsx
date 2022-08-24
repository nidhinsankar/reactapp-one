// import { Link } from "react-router-dom";
import FirstLineChart from "../components/recharts/FirstLineChart";
import OneChart from "../components/smallcharts/OneChart";


const OneChartScreen = ({dropdownValues}) => {

    return (
        <div className=" px-3 py-3">
            {/* <div className="routes flex justify-center">
                <Link to='/'  class="bg-gray-500 px-4 py-2 text-white">Single screen view</Link>
                <Link to='/twoHorizontalScreen'  class="bg-gray-500 px-4 py-2 text-white mx-2">Horizontal split view</Link>
                <Link to='/twoVerticalScreen'  class="bg-gray-500 px-4 py-2 text-white mx-2">Vertical split view</Link>
                <Link to='/fourChartScreen'  class="bg-gray-500 px-4 py-2 text-white">4 ways split</Link>
            </div> */}
            <div className="mt-4">
                {/* <FirstLineChart dropdownValue={dropdownValues} /> */}
                <OneChart dropdownValue={dropdownValues} />
            </div>
        </div>
    )
}

export default OneChartScreen;



{/* <div className='bg-black-100'>
        <div className='w-full lg:w-[30%] md:m-auto'>
            <span>
              <input type="radio" name="lineChart"  id="first" onClick={()=>setDisplayChart(1)} />
              <label htmlFor="first">First</label>
            </span>
            <span className='mx-2'>
              <input type="radio" name="lineChart" id="second" onClick={()=>setDisplayChart(2)} />
              <label htmlFor="second">Second</label>
            </span>
            <span className='mx-2'>
              <input type="radio" name="lineChart" id="third" onClick={()=>setDisplayChart(3)} />
              <label htmlFor="third">Third</label>
            </span>
            <span>
              <input type="radio" name="lineChart" id="fourth" onClick={()=> setDisplayChart(4)} />
              <label htmlFor="fourth">Fourth</label>
            </span>
        </div>
        <div  className="container">
          {displayChart >= 1 ?  : null}
          {displayChart >= 2 ? <SecondLineChart dropdownValue={dropdownValues} />: null}
        </div>
        <div  className="container">
          {displayChart >= 3 ? <ThirdLineChart dropdownValue={dropdownValues} />: null}
          {displayChart == 4 ? <FourthLineChart dropdownValue={dropdownValues} />:null}
        </div>
    </div> */}