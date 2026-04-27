import Header from "./components/Header";
import ProfileRikke from "./components/ProfileRikke";
import Assignments from "./components/Assignments";
import IkramProfile from "./components/profiles/IkramProfile";
import TirilProfile from "./components/profiles/TirilProfile";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <section className="profiles">
          <ProfileRikke />
          <IkramProfile />
          <TirilProfile />
        </section>

        <section className="assignments">
          <Assignments />
        </section>
      </main>
    </>
  );
}