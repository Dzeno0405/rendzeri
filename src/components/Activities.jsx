import "../style/Activities.css"; // Updated CSS
import React from "react";

const Activities = () => {
  const activitiesData = [
    {
      year: "2016 - 2022",
      content:
        "TBA",
    },
    {
      year: "COVID - 2020 - 2022",
      content: "TBA",
    },
    {
      year: "2022",
      content: "TBA",
    },
    {
        year: "2023",
        content: "Tokom 2023. godine, Klub ASK Rendžeri je realizovao niz značajnih aktivnosti. \n  Organizovani su zajednički treninzi s drugim klubovima, uključujući ASK Asker, ASK Hawk, Valhalla i Čapljina. Klub je učestvovao na više airsoft takmičenja i susreta, kao što su 24H Milsim događaji u Kravicama, Bužimu, Zenici i Visokom, te kola Airsoft Mastera Federacije BiH u Zenici, Tešnju, Gradačcu i Zavidovićima. Realizovane su i humanitarne aktivnosti kroz saradnju s udruženjem POMOZI.BA, gdje su članovi Kluba pružili pomoć za Tursku i Siriju nakon zemljotresa. Pokrenuta je Airsoft Škola za početnike, u okviru koje je primljeno 10 novih članova. Organizovane su teambuilding aktivnosti, poput raftinga u Konjicu i planinarenja na Igmanu. Klub je realizovao preko 40 internih treninga, uređivao poligon i jačao partnerstva, uključujući obnovu saradnje s DanialS. Također, izrađene su članske kartice i klupske polo majice za aktivne članove. Kroz ove aktivnosti, Klub je unaprijedio svoj rad, učvrstio saradnju s drugim klubovima i zajednicom te proširio svoj članstveni kadar."
      },
      
    {
      year: "2024",
      content: "TBA",
    },
  ];

  return (
    <div className="activities-container">
      <h2 className="activities-header">Aktivnosti kroz godine</h2>
      {activitiesData.map((activity, index) => (
        <div className="year-box" key={index}>
          <div className="year-title">{activity.year}</div>
          <div className="year-content">{activity.content}</div>
        </div>
      ))}
      <div className="activities-footer">
        <p>Zapratite nas na društvenim mrežama 🫡</p>
      </div>
    </div>
  );
};


export default Activities;
