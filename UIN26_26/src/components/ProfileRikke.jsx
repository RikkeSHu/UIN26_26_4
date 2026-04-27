import "./ProfileRikke.css";
import rikkeBilde from "../assets/pic/rikkemus.jpg";

export default function ProfileRikke() {
  return (
    <article className="rikke-profile">
      <figure>
        <img src={rikkeBilde} alt="Illustrasjon av Rikke" />
        <figcaption>Rikke</figcaption>
      </figure>

      <h2>Rikke</h2>

      <p>
        <a href="mailto:rikkehusby@icloud.com">
          rikkehusby@icloud.com
        </a>
      </p>

      <p>Bachelor i Digitale medier og Design</p>
    </article>
  );
}