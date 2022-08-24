import { Link } from "react-router-dom";
import FirstLineChart from "../components/recharts/FirstLineChart";
import SecondLineChart from "../components/recharts/SecondLineChart";
import ThirdLineChart from "../components/recharts/ThirdLineChart";



const TwoHChartScreen = ({dropdownValues}) => {

    return (
        <div className="p-3">
            <div className="routes flex justify-center">
                <Link to='/'  class="bg-gray-500 px-4 py-2 text-white">Single screen view</Link>
                <Link to='/twoHorizontalScreen'  class="bg-gray-500 px-4 py-2 text-white mx-2">Horizontal split view</Link>
                <Link to='/twoVerticalScreen'  class="bg-gray-500 px-4 py-2 text-white mx-2">Vertical split view</Link>
                <Link to='/fourChartScreen'  class="bg-gray-500 px-4 py-2 text-white">4 ways split</Link>
            </div>
            <div className="grid grid-rows-2 gap-4 mt-8">
                <div className="">
                    <FirstLineChart dropdownValue={dropdownValues} horizontal={'horizontal'} />
                </div>
                <div className="">
                    <SecondLineChart dropdownValue={dropdownValues} horizontal={'horizontal'} />
                </div>
            </div>
        </div>
    )
}

export default TwoHChartScreen;


{/* <div className="horizontal flex flex-col lg:flex-row justify-between w-full mt-4 gap-2">
                <div className="w-[100%] lg:w-[50%]">
                    <FirstLineChart dropdownValue={dropdownValues}  />
                </div>
                <div className="w-[100%] lg:w-[50%]">
                    <SecondLineChart dropdownValue={dropdownValues} />
                </div>
            </div> */}