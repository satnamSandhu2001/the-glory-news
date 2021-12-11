import React from "react";
import LoaderImg from "../Loader.gif";
const Loader = () => {
    return (
        <div className="h-75 d-flex justify-content-center align-items-center my-5">
            <img src={LoaderImg} className="rounded mx-auto d-block h-25" alt="Loading..." />
        </div>
    );
};

export default Loader;
