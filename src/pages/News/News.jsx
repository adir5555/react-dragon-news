import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "../Home/BreakingNews";


const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
           <div className="grid md:grid-cols-4">

            <div className="col-span-3">
                <h2 className="text-3xl">Dragon News</h2>
                <p>{id}</p>

            </div>
            <div className="">
                <RightSideNav></RightSideNav>

            </div>

           </div>

        </div>
    );
};

export default News;