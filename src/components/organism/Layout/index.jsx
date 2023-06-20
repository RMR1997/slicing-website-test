import { Link } from "react-router-dom";
import Button from "../../atom/Button";
import Image from "../../atom/Image";

export default function Layout(props) {
    const { children, type } = props;

 

    return (
        <div>
            <div className="flex flex-col w-screen h-screen">
                <Header type={type} />
                <div className="w-full h-fit pb-5 bg-gradient-to-b from-sky-blue to-[#a9a2fc]">
                    {children}
                </div>
                <Footer type={type}></Footer>
            </div>
        </div>
    );
}

const Header = (props) => {
    const { type } = props;

    const logout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = '/landingPage' }


    return (
        <>
            {type == "logout" ? (
                <div className="sticky px-10 flex justify-between w-full h-[75px] bg-[#fff0e9] items-center text-center ">
                    
                <div className="p-2">
                    <h1 className=" p-2 text-3xl text-black font-bold"><a href="#" className="p-1">Foodle</a></h1>
                </div>
                <div className=" p-4 flex flex-row text-black font-medium gap-10 ">
                                <ul className="hover:text-white p-2">
                                <a href="#dashboard" className="p-1">Home</a> 
                                </ul>
                                <ul className="hover:text-white p-2">
                                <a href="#categories " className="p-1">Categories</a> 
                                </ul>
                                <ul className="hover:text-white p-2">
                                <a href="#menu" className="p-1">Menu</a> 
                                </ul>
                                <ul className="hover:text-white p-2">
                                <a href="#discount" className="p-1">Discount</a> 
                                </ul>
                            
                </div>
                <div className="flex text-center justify-center items-center">
                    <Button color="bg-black text-2xl justify-center item-center text-center m-1 mb-1 " onClick={logout}>LOGOUT</Button>
                </div>
                    
                    
                </div>


            ) : (
                <div className="px-10 flex justify-between sticky top-0 w-full h-[75px] bg-[#fff0e9]  items-center text-center ">
                    
                    <div>
                    <h1 className="text-3xl ml-4 text-black font-bold">Foodle</h1>
                </div>
                <div className="flex flex-row text-black font-medium gap-10">
                                {/* <ul className="hover:text-white">
                                    Home
                                </ul>
                                <ul className="hover:text-white">
                                    Offers
                                </ul>
                                <ul className="hover:text-white">
                                    Service
                                </ul>
                                <ul className="hover:text-white">
                                   About us
                                </ul> */}
                            
                </div>
                <div className="">
                    <Link to="/loginPage"><Button color="bg-black text-2xl justify-center item-center text-center m-4">LOGIN</Button></Link>
                </div>
                </div>
            )}
        </>
    );
};

const Footer = (props) => {
    const { type } = props;
    return (
        <>
         {type == "logout" ? (
        <footer>
        <div className="sticky  bg-[#fff0e9] border flex text-center items-center justify-center">
            <div className=" sticky bottom-0 mx-auto w-full max-w-screen-xl min-h-full p-4 py-6 ">
                <div className="flex flex-row gap-28">
                    
                    <div className="m-10 mb-5 flex flex-col">
                        <div className=" flex flex-col">
                        <span className="p-2 text-2xl font-semibold text-[#e95756]">Foodish</span>
                        <p className=" p-2 text-gray-400">Continue Foodish 2023</p>
                        </div>

                        <div className="flex flex-col">
                        <div className="text-2xl font-semibold text-[#e95756]">
                        <p className="p-2">Follow us on</p>
                        </div> 
                        <div class="flex flex-row gap-3 p-2 justify-center items-center">
                            <div className="w-14 h-14 text-white hover:text-white">
                                <Image size="" image="public/images/dribble.png"></Image>    
                            </div>
                            <div className="w-14 h-14 text-gray-500 hover:text-white"> 
                                 <Image size="" image="public/images/instagram.png"></Image>
                            </div>
                            <div className="w-14 h-14 text-gray-500 hover:text-white"> 
                                 <Image size="" image="public/images/twitter2.png"></Image>
                            </div>
                            <div className="w-14 h-14 text-gray-500 hover:text-white"> 
                                 <Image size="" image="public/images/facebook.png"></Image>
                            </div>

                        </div>
                        </div>
                       
                    </div>

                    <div class=" m-8 p-4 gap-24 flex justify-between items-center">
                        <div className="flex flex-col">
                            <h2 class=" text-2xl font-semibold text-[#e95756] ">Menu</h2>
                            <ul class=" p-2 text-gray-400 font-medium">
                                <li className="hover:text-gray-700 mt-4 p-2">
                                <a href="#dashboard" className="p-1">Home</a> 
                                </li>
                                <li className="hover:text-gray-700 mt-3 p-2">
                                <a href="#categories" className="p-1">Categories</a> 
                                </li>
                                <li className="hover:text-gray-700 mt-3 p-2">
                                <a href="#menu" className="p-1">Menu</a>
                                </li>
                                <li className="hover:text-gray-700 mt-3 p-2">
                                <a href="#discount" className="p-1">Discount</a> 
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col">
                            <h2 class="text-2xl font-semibold text-[#e95756] ">Information</h2>
                            <ul class= " p-2 text-gray-400 font-medium">
                                <li className="hover:text-gray-700 mt-4 p-2">
                                    Menu
                                </li>
                                <li className="hover:text-gray-700 mt-3 p-2">
                                    Quality
                                </li>
                               
                                <li className="hover:text-gray-700 mt-3 p-2">
                                    Fast Delivery
                                </li>
                                <li className="hover:text-gray-700 mt-3">
                                    Subscribe
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col">
                            <h2 class=" text-2xl font-semibold text-[#e95756] ">Contact</h2>
                            <ul class="p-2 text-gray-400 font-medium">
                                <li className="hover:text-gray-700 mt-3 p-2 ">
                                    0813-8028-4207
                                </li>
                                <li className="hover:text-gray-700 mt-3 p-2">
                                    Explore
                                </li>
                                <li className="hover:text-gray-700 mt-3 p-2">
                                    Info@food.com
                                </li>
                                <li className="hover:text-gray-700 mt-3 p-2">
                                    Sukabumi
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>

            </div>
        </div>
        </footer>

        ) : (
            <div className="mt-32 bg-[#fff0e9]"></div>
        )}
        </>
       
    
    );
};