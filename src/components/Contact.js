const Contact = () => {
    return (
        <div className="w-3/12 m-auto border rounded-lg text-center">
            <h1 className="font-bold text-3xl p-4 ">Contact Us Page</h1>
            <form>
                <input type="text" className=" border p-2 m-4 rounded-md" placeholder="name" />
                <input type="text" className=" border p-2 m-4 rounded-md" placeholder="email" />
                <div>
                    <button className="text-white w-3/12 p-2 m-4 rounded-lg bg-green-700 " >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default  Contact