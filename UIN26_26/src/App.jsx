import Header from "./components/Header";
import ProfileRikke from "./components/ProfileRikke";
import Assignments from "./components/Assignments";
import IkramProfile from "./components/profiles/IkramProfile";

import myPhoto from "./assets/tirilphoto.jpg";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <section>
          <ProfileRikke />
        </section>

        <section>
          <IkramProfile />
        </section>

        <section>
          <h1>Tiril</h1>
          <img src={myPhoto} alt="Bilde av Tiril" />

          <p>E-post:</p>
          <a href="mailto:Tirillg@hiof.no">Tirillg@hiof.no</a>

          <p>Bachelorstudiet er Digitale medier og design</p>
        </section>

        <section>
          <Assignments />
        </section>
      </main>
    </>
  );
}