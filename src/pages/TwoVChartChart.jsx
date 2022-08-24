import { Link } from "react-router-dom";
import FirstLineChart from "../components/recharts/FirstLineChart";
import SecondLineChart from "../components/recharts/SecondLineChart";


const TwoVChartScreen = ({dropdownValues}) =>{ 

    return (
        <div className="p-3">
            <div className="routes flex justify-center">
                <Link to='/'  class="bg-gray-500 px-4 py-2 text-white">Single screen view</Link>
                <Link to='/twoHorizontalScreen'  class="bg-gray-500 px-4 py-2 text-white mx-2">Horizontal split view</Link>
                <Link to='/twoVerticalScreen'  class="bg-gray-500 px-4 py-2 text-white mx-2">Vertical split view</Link>
                <Link to='/fourChartScreen'  class="bg-gray-500 px-4 py-2 text-white">4 ways split</Link>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <FirstLineChart dropdownValue={dropdownValues}  />
                <SecondLineChart dropdownValue={dropdownValues} />
            </div>
        </div>
    )
}

export default TwoVChartScreen;