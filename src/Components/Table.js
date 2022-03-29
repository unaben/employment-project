import React, { useContext } from "react";
import "../CSS/table.css";
import firstTrophy from "../image/award.png";
import secondTrophy from "../image/achievement.png";
import thirdTrophy from "../image/trophy.png";
import arrow from "../image/downward-arrow.png";
import { Context } from "./Context/Context";

export default function Table() {
  const { jsonData, sortingColumn } = useContext(Context);
  return (
    <div>
      <h3>Results</h3>
      <table>
        <thead className="table-header">
          <tr>
            <th
              className="grid-auto-flow font"
              onClick={() => sortingColumn("PlayerId")}
            >
              <h3 style={{ fontSize: "bold", color: "black" }}>Position</h3>
              <img src={arrow} alt="downarrow-icon" />
            </th>
            <th className="font" onClick={() => sortingColumn("Name")}>
              <h3>Player Name</h3>
            </th>
            <th className="game" onClick={() => sortingColumn("GamesPlayed")}>
              <h3 className="game">Games Played</h3>
            </th>
            <th className="score"  onClick={() => sortingColumn("TotalScore")}>
              <h3 className="score">Total Score</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((arr, index) => {
            console.log("Inside Map: ", arr, index);
            return (
              <>
                <tr key={index}>
                  <td className="index">
                    {index + 1}.
                    {index + 1 === 1 && (
                      <img src={firstTrophy} alt="trophy-img" />
                    )}
                    {index + 1 === 2 && (
                      <img src={secondTrophy} alt="trophy-img" />
                    )}
                    {index + 1 === 3 && (
                      <img src={thirdTrophy} alt="trophy-img" />
                    )}
                  </td>
                  <td className="name">{arr.Name}</td>
                  <td className="game">{arr.GamesPlayed}</td>
                  <td className="score">{arr.TotalScore}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
