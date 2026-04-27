import "./ProfileRikke.css";
import rikkeBilde from "../assets/pic/rikkemus.jpg";

export default function ProfileRikke() {
  return (
    <article className="rikke">
      <figure>
        <img src={rikkeBilde} alt="Portrett av Rikke" />
      </figure>

      <h2>Rikke</h2>

      <a href="mailto:rikkehusby@icloud.com">
        rikkehusby@icloud.com
      </a>

      <p>Bachelor i Digitale medier og Design</p>
    </article>
  );
}