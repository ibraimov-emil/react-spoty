import logo from './logo.svg';
import './App.css';
import AppRouter from "./AppRouter";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import TopPlay from "./components/TopPlay";
import {useSelector} from "react-redux";

function App() {
    const { activeSong } = useSelector((state) => state.player)

    return (
        <div className="relative flex">
            <Sidebar/>
            <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
                <SearchBar/>
                <div
                    className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
                    <div className="flex-1 h-fit pb-40">
                        <AppRouter />
                    </div>
                    <div className="xl:sticky relative top-0 h-fit">
                        <TopPlay />
                    </div>
                </div>
            </div>
        </div>
        // <h1 className="text-5xl font-bold underline">
        //   <AppRouter />
        // </h1>
    );
}

export default App;
