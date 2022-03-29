import React, { useContext } from "react";
import "../CSS/table.css";
import firstTrophy from "../image/award.png";
import secondTrophy from "../image/achievement.png";
import thirdTrophy from "../image/trophy.png";
import { Context } from "./Context/Context";

export default function Table() {
  const { jsonData } = useContext(Context);
  console.log("Inside table Func: ", jsonData);
  return (
    <div>
    <h3>Results</h3>
      <table>
        <thead className="table-header">
          <tr>
            <th>
              <h3>Position</h3>
            </th>
            <th>
              <h3>Player Name</h3>
            </th>
            <th>
              <h3>Games Played</h3>
            </th>
            <th>
              <h3>Total Score</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((arr, index) => {
            console.log("Inside Map: ", arr, index);
            return (
              <>
                <tr key={index}>
                  <td>
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
                  <td>{arr.Name}</td>
                  <td>{arr.GamesPlayed}</td>
                  <td>{arr.TotalScore}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
