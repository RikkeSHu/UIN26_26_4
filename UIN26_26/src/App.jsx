import Header from "./components/Header";
import ProfileRikke from "./components/ProfileRikke";
import Assignments from "./components/Assignments";

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