HEAD
import Header from "./components/Header";
import ProfileRikke from "./components/ProfileRikke";
import Assignments from "./components/Assignments";
import IkramProfile from "./components/profiles/IkramProfile";
export default function App() {
  return (
    <>
 
      <Header />

      <main>
        <section>
          <ProfileRikke />
        </section>

        <Assignments />
      </main>
    </>
  );
}