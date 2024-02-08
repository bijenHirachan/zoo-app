import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import DaysTable from "@/Components/DaysTable";
import Paginator from "@/Components/Paginator";
const DayIndex = ({ auth, days }) => {
    const [page, setPage] = useState(days?.current_page || 1);

    const getPage = () => {
        router.get(
            "/days",
            {
                page,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            }
        );
    };

    useEffect(() => {
        const handlePage = setTimeout(() => getPage(), 500);

        return () => {
            clearTimeout(handlePage);
        };
    }, [page]);

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Days
                </h2>
            }
        >
            <Head title="Days" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <form
                            onSubmit={submitHandler}
                            className="p-6 flex gap-2 justify-end"
                        >
                            <select
                                className="rounded text-gray-500 border border-gray-400 outline-none focus:ring-0"
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
                                className="rounded text-gray-500 border border-gray-400 outline-none focus:ring-0"
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
                            <button
                                className="border border-gray-600 px-3 py-1 text-gray-600 font-semibold rounded hover:bg-gray-500 hover:text-gray-50 transition-all delay-75"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form> */}
                        <div className="p-6">
                            <DaysTable days={days?.data} />

                            <Paginator
                                page={page}
                                setPage={setPage}
                                currentPage={days?.current_page}
                                itemName={"days"}
                                total={days?.total}
                                lastPage={days?.last_page}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default DayIndex;
