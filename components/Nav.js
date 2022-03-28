import request from "../utils/request"

function Nav() {
    return (
        <nav>
            <div className="">
                {Object.entries(request).map(([key, { title, url }]) =>

                (
                    <h2 key={key}
                        className="cursor-pointer transition duration-100 
                        trasform hover:scale-125 hover:text-white 
                        active:text-red-500"

                    >{title}</h2>

                ))}
            </div>
        </nav>
    )
}

export default Nav