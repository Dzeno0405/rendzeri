import "../style/Activities.css"; // Updated CSS
import React, { useState } from "react";

const Activities = () => {
  const activitiesData = [
    {
      year: "2016 - 2020",
      content:
        "Airsoft klub Rendžeri osnovan je 2016. godine, a 2019. godine pridružio se Savezu airsoft klubova Federacije Bosne i Hercegovine, pri čemu je bio jedan od njegovih osnivača. Klub je bio posvećen očuvanju i unapređenju taktika modernog ratovanja, s posebnim naglaskom na metodologiju američkih Rangersa. Treninzi su obuhvatali širok spektar borbenih scenarija, uključujući šumsko ratovanje i CQB (Close Quarters Battle) taktike. U sklopu svog razvoja, klub je započeo izgradnju vlastitog poligona na Ilidži, te je nastavio njegovati svoju tradiciju i posvećenost sportu sve do kraćeg prekida uzrokovanog pandemijom COVID-19.",
    },
    {
      year: "2020 - 2022",
      content: "Tokom pandemije COVID-19, klub je i dalje organizovao nekoliko aktivnosti, ali u znatno manjem obimu u odnosu na prethodne godine. Ograničenja i mjere predostrožnosti uticale su na redovne treninge i okupljanja, što je usporilo razvoj i dinamiku kluba u tom periodu.",
    },
    {
      year: "2022",
      content: "Godine 2022. klub je obnovio organizaciju Airsoft škole za početnike, što je rezultiralo prijemom više od 10 novih članova. Shodno tome, došlo je do promjene uprave kluba, koja je nastavila s daljim razvojem i unapređenjem aktivnosti. Nova uprava pokrenula je nove cikluse Airsoft škole, obučavala nove članove i osnažila tim. Klub je nastavio s redovnim treninzima i aktivnostima, dok su njegovi članovi postali izuzetno aktivni na MILSIM susretima širom Bosne i Hercegovine.",
    },
    {
        year: "2023",
        content: "Tokom 2023. godine, Klub ASK Rendžeri je realizovao niz značajnih aktivnosti. \n  Organizovani su zajednički treninzi s drugim klubovima, uključujući ASK Asker, ASK Hawk, Valhalla i Čapljina. Klub je učestvovao na više airsoft takmičenja i susreta, kao što su 24H Milsim događaji u Kravicama, Bužimu, Zenici i Visokom, te kola Airsoft Mastera Federacije BiH u Zenici, Tešnju, Gradačcu i Zavidovićima. Realizovane su i humanitarne aktivnosti kroz saradnju s udruženjem POMOZI.BA, gdje su članovi Kluba pružili pomoć za Tursku i Siriju nakon zemljotresa. Pokrenuta je Airsoft Škola za početnike, u okviru koje je primljeno 10 novih članova. Organizovane su teambuilding aktivnosti, poput raftinga u Konjicu i planinarenja na Igmanu. Klub je realizovao preko 40 internih treninga, uređivao poligon i jačao partnerstva, uključujući obnovu saradnje s DanialS. Također, izrađene su članske kartice i klupske polo majice za aktivne članove. Kroz ove aktivnosti, Klub je unaprijedio svoj rad, učvrstio saradnju s drugim klubovima i zajednicom te proširio svoj članstveni kadar."
      },
      
    {
      year: "2024",
      content: "Godine 2024. klub je nastavio s intenzivnim sudjelovanjem na airsoft susretima, prisustvujući na 90% događaja širom Bosne i Hercegovine. Postao je izuzetno aktivan na domaćim terenima, postupno se etablirajući kao jedan od prepoznatljivih i cijenjenih klubova. Njegova izdržljivost u terenskim uvjetima, predanost izvršavanju zadataka na susretima te prepoznatljiva Multicam uniforma dodatno su doprinijeli njegovom ugledu u airsoft zajednici. Tokom godine, klub je primio preko 20 novih članova, čime je značajno proširio svoje redove i dodatno osnažio tim. Krajem godine, usvojen je Pravilnik o radu i disciplinskoj odgovornosti, a formirana je i disciplinska komisija, čime su postavljeni jasni standardi organizacije i djelovanja kluba.",
    },  ];

  const [expanded, setExpanded] = useState({});

  const handleToggle = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  return (
    <div className="activities-container">
      <h2 className="activities-header">Aktivnosti kroz godine</h2>
      {activitiesData.map((activity, index) => (
        <div className="year-box" key={index}>
          <div
            className="year-title"
            onClick={(e) => {
              if (window.innerWidth < 768) {
                handleToggle(index);
              }
            }}
          >
            {activity.year}
          </div>
          {(window.innerWidth >= 768 || expanded[index]) && (
            <div className="year-content">{activity.content}</div>
          )}
        </div>
      ))}
      <div className="activities-footer">
        <p>Zapratite nas na društvenim mrežama 🫡</p>
      </div>
    </div>
  );
};

export default Activities;