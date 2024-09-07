'use client';
import axios from "axios";

function performLogin(e) {
    e.preventDefault();
    const contact = e.target[0].value;
    const password = e.target[1].value;

    axios.post("/api/user/signin", {
        contact,
        password
    }).then(res => {
        if(res.data.token) {
            localStorage.setItem("token", res.data.token);
            window.location.href = "/";
        } else {
            alert("Invalid credentials");
        }
    }).catch(e => {
        alert("Something went wrong");
    });
}

export default function Login() {
    
    return(
        <div className="h-[100vh] flex items-center justify-center bg-gradient-to-l from-gray-200 via-blue-200 to-stone-100">
            <div className="grid grid-cols-1 gap-4 w-[80%] lg:w-[30%]">
                
                <form id="login" onSubmit={performLogin} className="flex flex-col gap-4 border border-black p-12 rounded-[1rem] bg-slate-800 backdrop-blur-lg bg-opacity-80">
                    <h1 className="text-3xl font-bold text-center">Login</h1>

                    <input type="number" placeholder="Contact" className="p-2 border border-gray-300 rounded" />
                    <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded" />

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
                </form>
                
                <div className="h-1 bg-gray-100 rounded-full relative">
                    <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 rounded-full">OR</div>
                </div>

                <div className="flex flex-col gap-4 border border-black p-12 rounded-[1rem]">
                    <h1 className="text-3xl font-bold text-center">Register</h1>

                    <input type="text" placeholder="Name" className="p-2 border border-gray-300 rounded" />
                    <input type="number" placeholder="Contact" className="p-2 border border-gray-300 rounded" />
                    <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded" />
                    <input type="password" placeholder="Confirm Password" className="p-2 border border-gray-300 rounded" />

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
                </div>

            </div>
        </div>
    );
}