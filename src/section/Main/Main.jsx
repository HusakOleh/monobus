import React from "react";
import './Main.scss'
import { Benefits } from "../../components/Benefits/Benefits";
import { About } from "../../components/About/About";
import { TrackerSection } from "../../components/TrackerSection/TrackerSection";

export const Main = () => {
    return (
        <main>
          <Benefits />
          <About />
          <TrackerSection/>
        </main>
    );
};
