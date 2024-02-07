import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
} from "chart.js";
import dayjs from "dayjs";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
);

export default function Dashboard({ auth, days, daysSelector }) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const data = {
        labels: days?.map((day) => day.day),
        datasets: [
            {
                label: "Aantal bezoekers per dag",
                data: days?.map((day) => day.reservations_count),
                backgroundColor: "aqua",
                borderColor: "black",
                pointBorderColor: "aqua",
                tension: 0.4,
            },
        ],
    };

    const options = {
        plugins: {
            legend: true,
        },
        scales: {
            y: {
                min: Math.min(...days?.map((day) => day.reservations_count)),
                max: Math.max(...days?.map((day) => day.reservations_count)),
            },
        },
    };

    const submitHandler = (e) => {
        e.preventDefault();

        router.get(
            "/dashboard",
            {
                startDate,
                endDate,
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={submitHandler}
                            className="p-6 flex gap-2"
                        >
                            <select
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            >
                                <option value="">Select Start Date</option>
                                {daysSelector?.length > 0 &&
                                    daysSelector.map((day, index) => (
                                        <option value={day} key={index}>
                                            {day}
                                        </option>
                                    ))}
                            </select>
                            <select
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            >
                                <option value="">Select End Date</option>
                                {daysSelector?.length > 0 &&
                                    daysSelector.map((day, index) => (
                                        <option value={day} key={index}>
                                            {day}
                                        </option>
                                    ))}
                            </select>
                            <button type="submit">Submit</button>
                        </form>
                        <div className="p-6 text-gray-900 ">
                            <Line data={data} options={options}></Line>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
