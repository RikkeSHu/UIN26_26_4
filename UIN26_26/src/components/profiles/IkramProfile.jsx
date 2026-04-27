import "../../styles/IkramStyles.css";
import ikramImg from "../../assets/ikrambilde.jpg";

export default function IkramProfile() {
  return (
    <section className="ikram-card">
      <h2>Ikram</h2>

      <img src={ikramImg} alt="Bilde av Ikram" />

      <p>
        E-post: <a href="mailto:ikrammh@hiof.no">ikrammh@hiof.no</a>
      </p>

      <p>Bachelor i digitale medier og design</p>
    </section>
  );
}