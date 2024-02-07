import { Head, router, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const Welcome = ({ days, schedules, errors }) => {
    const { data, setData, progress, post } = useForm({
        day: "",
        timeslot: "",
        first_name1: "",
        last_name1: "",
        subscription_number1: "",
        first_name2: "",
        last_name2: "",
        subscription_number2: "",
        first_name3: "",
        last_name3: "",
        subscription_number3: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(`/reservations`);
    };

    const handleTimeslots = (e) => {
        setData("day", e.target.value);
        router.get(
            "/",
            {
                day: e.target.value,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            }
        );
    };

    return (
        <div className="p-8">
            <Head title="Welcome" />

            <form onSubmit={submitHandler} className="flex flex-col gap-4">
                <div className="flex flex-col w-1/2">
                    <label htmlFor="day">Datum</label>
                    <select
                        name="day"
                        id="day"
                        value={data.day}
                        onChange={handleTimeslots}
                    >
                        <option value="">Select Date</option>
                        {days?.length > 0 &&
                            days.map((day) => (
                                <option key={day.id} value={day.id}>
                                    {day.day}
                                </option>
                            ))}
                    </select>
                    <span className="text-xs text-red-500">{errors.day}</span>
                </div>

                <div className="flex flex-col w-1/2">
                    <label htmlFor="timeslot">Tijdslot</label>
                    <select
                        value={data.tijdslot}
                        onChange={(e) => setData("timeslot", e.target.value)}
                        id="timeslot"
                    >
                        <option value="">Select Time</option>
                        {schedules?.length > 0 &&
                            schedules.map((schedule) => (
                                <option key={schedule.id} value={schedule.id}>
                                    {schedule.start_time} - {schedule.end_time}
                                </option>
                            ))}
                    </select>
                    <span className="text-xs text-red-500">
                        {errors.timeslot}
                    </span>
                </div>

                <div className="border border-gray-400 p-4 flex flex-col gap-8">
                    <div className="">
                        <div className="flex flex-col">
                            <label htmlFor="first_name1">Voornaam</label>
                            <input
                                value={data.first_name1}
                                onChange={(e) =>
                                    setData("first_name1", e.target.value)
                                }
                                id="first_name1"
                                type="text"
                            />
                            <span className="text-xs text-red-500">
                                {errors.first_name1}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="last_name1">Familienaam</label>
                            <input
                                value={data.last_name1}
                                onChange={(e) =>
                                    setData("last_name1", e.target.value)
                                }
                                id="last_name1"
                                type="text"
                            />
                            <span className="text-xs text-red-500">
                                {errors.last_name1}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="subscription_number1">
                                Abonnementsnummer
                            </label>
                            <input
                                value={data.subscription_number1}
                                onChange={(e) =>
                                    setData(
                                        "subscription_number1",
                                        e.target.value
                                    )
                                }
                                id="subscription_number1"
                                type="text"
                                placeholder="1234-1234-12"
                            />
                            <span className="text-xs text-red-500">
                                {errors.subscription_number1}
                            </span>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col">
                            <label htmlFor="first_name2">Voornaam</label>
                            <input
                                value={data.first_name2}
                                onChange={(e) =>
                                    setData("first_name2", e.target.value)
                                }
                                id="first_name2"
                                type="text"
                            />
                            <span className="text-xs text-red-500">
                                {errors.first_name2}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="last_name2">Familienaam</label>
                            <input
                                value={data.last_name2}
                                onChange={(e) =>
                                    setData("last_name2", e.target.value)
                                }
                                id="last_name2"
                                type="text"
                            />
                            <span className="text-xs text-red-500">
                                {errors.last_name2}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="subscription_number2">
                                Abonnementsnummer
                            </label>
                            <input
                                value={data.subscription_number2}
                                onChange={(e) =>
                                    setData(
                                        "subscription_number2",
                                        e.target.value
                                    )
                                }
                                id="subscription_number2"
                                type="text"
                                placeholder="1234-1234-12"
                            />
                            <span className="text-xs text-red-500">
                                {errors.subscription_number2}
                            </span>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col">
                            <label htmlFor="first_name3">Voornaam</label>
                            <input
                                value={data.first_name3}
                                onChange={(e) =>
                                    setData("first_name3", e.target.value)
                                }
                                id="first_name3"
                                type="text"
                            />
                            <span className="text-xs text-red-500">
                                {errors.first_name3}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="last_name3">Familienaam</label>
                            <input
                                value={data.last_name3}
                                onChange={(e) =>
                                    setData("last_name3", e.target.value)
                                }
                                id="last_name3"
                                type="text"
                            />
                            <span className="text-xs text-red-500">
                                {errors.last_name3}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="subscription_number3">
                                Abonnementsnummer
                            </label>
                            <input
                                value={data.subscription_number3}
                                onChange={(e) =>
                                    setData(
                                        "subscription_number3",
                                        e.target.value
                                    )
                                }
                                id="subscription_number3"
                                type="text"
                                placeholder="1234-1234-12"
                            />
                            <span className="text-xs text-red-500">
                                {errors.subscription_number3}
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit">Reserveer!</button>
                </div>
            </form>
        </div>
    );
};

export default Welcome;
