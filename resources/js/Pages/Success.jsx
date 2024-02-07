import { Link } from "@inertiajs/react";
import React from "react";

const Success = () => {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col">
            <h2>Je hebt je succesvol geregistreerd.</h2>

            <Link className="text-blue-500 text-sm hover:underline" href="/">
                Terug naar homepagina.
            </Link>
        </div>
    );
};

export default Success;
