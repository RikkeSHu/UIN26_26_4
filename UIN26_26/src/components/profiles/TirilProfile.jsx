import myPhoto from "../../assets/tirilphoto.jpg";

export default function TirilProfile() {
  return (
    <section className="profile tiril">
      <h2>Tiril</h2>
      <img src={myPhoto} alt="Bilde av Tiril" />

      <p>
        E-post: <a href="mailto:Tirillg@hiof.no">Tirillg@hiof.no</a>
      </p>

      <p>Bachelorstudiet er Digitale medier og design</p>
    </section>
  );
}