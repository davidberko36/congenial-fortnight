import Footer from "./Footer";
import Navbar from "./Navbar";

const Dashboard = () => {
    return ( 
        <div>
            
            <Navbar />
            <h1>Dashboard</h1>
            <h2>Current Grades</h2>
           
            <div className="grade-area">

            </div>
            < Footer />
        </div>
     );
}
 
export default Dashboard;