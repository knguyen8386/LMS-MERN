"use client";
import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Profile from "../components/Profile/Profile";
import Footer from "../components/Footer";

type Props = {};

const page: FC<Props> = (props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(5);
    const [route, setRoute] = useState("Login");
    const { user } = useSelector((state: any) => state.auth);

    return (
        <div className="min-h-screen">
            <Protected>
                <Heading
                    title={`${user?.name} profile - Kuzsera`}
                    description="Elearning is a prlatform for student to learn and get help from teachers"
                    keywords="Programming, Machine Learning"
                />
                <Header
                    open={open}
                    setOpen={setOpen}
                    activeItem={activeItem}
                    setRoute={setRoute}
                    route={route}
                />
                <Profile user={user} />
                <Footer />
            </Protected>
        </div>
    );
};

export default page;
