import React from "react";
import { CSSTransition } from "react-transition-group";
import "../style/Info.css";

function Info() {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade-in">
      <div className="info-container">
        <div className="info-card">
          <h1 className="info-title">O Nama</h1>
          <p className="info-text">
            Osnovan 2016. godine, Airsoft klub Rendžeri Ilidža ponosno njeguje
            tradiciju i posvećenost airsoftu, s posebnom inspiracijom u loadoutu
            američkih specijalnih snaga – US Army Rangers. Naš klub predstavlja
            spoj profesionalizma, timskog duha i strasti prema ovom sportu.
          </p>
          <p className="info-text">
            Aktivno sudjelujemo na MILSIM susretima širom Bosne i Hercegovine,
            gdje predstavljamo klub s visokim standardima discipline i taktičke
            preciznosti. Rendžeri Ilidža su također ponosni član Saveza Airsoft
            klubova Federacije Bosne i Hercegovine, kroz koji doprinosimo
            razvoju i promociji airsoft sporta u regiji.
          </p>
          <p className="info-text">
            Pored MILSIM-a, naš klub se natječe u prestižnom takmičenju Airsoft
            Master Federacije, gdje se mjerimo s najboljima u ovom sportu.
          </p>
          <p className="info-text">
            Trenutno brojimo 49 članova, od kojih je 43 aktivnih – svi posvećeni
            zajedničkom cilju unapređenja kluba i širenju ljubavi prema
            airsoftu.
          </p>
          <p className="info-text">
            Airsoft klub Rendžeri Ilidža nije samo sportski tim, već zajednica u
            kojoj se cijene zajedništvo, disciplina i prijateljstvo, uz
            istovremeno usavršavanje taktičkih vještina.
          </p>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Info;
