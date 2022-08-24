import { Link } from "react-router-dom";
import FirstLineChart from "../components/recharts/FirstLineChart";
import FourthLineChart from "../components/recharts/FourthLineChart";
import SecondLineChart from "../components/recharts/SecondLineChart";
import ThirdLineChart from "../components/recharts/ThirdLineChart";


const FourChartScreen = ({dropdownValues}) => {

    return (
        <div className="p-3">
            <div className="routes flex justify-center">
                <Link to='/'  class="bg-gray-500 px-4 py-2 text-white">Single screen view</Link>
                <Link to='/twoHorizontalScreen'  class="bg-gray-500 px-4 py-2 text-white mx-2">Horizontal split view</Link>
                <Link to='/twoVerticalScreen'  class="bg-gray-500 px-4 py-2 text-white mx-2">Vertical split view</Link>
                <Link to='/fourChartScreen'  class="bg-gray-500 px-4 py-2 text-white">4 ways split</Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <FirstLineChart dropdownValue={dropdownValues} horizontal={'horizontal'} />
                <SecondLineChart dropdownValue={dropdownValues} horizontal={'horizontal'} />
                <ThirdLineChart dropdownValue={dropdownValues} horizontal={'horizontal'} />
                <FourthLineChart dropdownValue={dropdownValues} horizontal={'horizontal'} />
            </div>
        </div>
    )
}

export default FourChartScreen;


{/* <div className="flex flex-col lg:flex-row mt-4">
                <FirstLineChart dropdownValue={dropdownValues} />
                <SecondLineChart dropdownValue={dropdownValues} />
            </div>
            <div className="flex flex-col lg:flex-row mt-3">
                <ThirdLineChart dropdownValue={dropdownValues} />
                <FourthLineChart dropdownValue={dropdownValues} />
            </div> */}