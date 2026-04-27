import "../../styles/IkramStyles.css"
import ikramImg from "../../assets/ikrambilde.jpg"


export default function IkramProfile() {
    return (
        <article className="ikram-card">
            <h2>Ikram Morgan Hassan</h2>
            
            <section className="ikram-content">
                <img src={ikramImg} alt="Bilde av Ikram" />
            </section>

            <p>
                E-post: <a href="mailto:ikrammh@hiof.no">ikrammh@hiof.no</a>
            </p>

            <p>
                Bachelor i digitale medier og design</p>
           
        </article>
    )
}