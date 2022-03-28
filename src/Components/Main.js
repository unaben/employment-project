import React from "react";
import GridContainer from "./GridContainer";
import MainHeader from "./MainHeader";
import Table from "./Table";
import "../CSS/main.css"

export default function Main() {
  return (
    <div>
      <header className="main-header">
        <MainHeader />
      </header>
      <section className="main-container">
        <GridContainer />
        <section className="table-container">
          <Table />
        </section>
      </section>
    </div>
  );
}
