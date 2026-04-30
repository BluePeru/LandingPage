import Link from "next/link";


export default function Whoarewe() {
  return (  
    <section className="section section-whoarewe" id="whoarewe">
    <div className="section-inner">
      <span className="section-label reveal" data-delay="0">NOSOTROS</span>
      <h2 className="section-heading reveal" data-delay="1">
        Conoce a <span className="serif-accent">Blue</span>
      </h2>
      <p className="section-description reveal" data-delay="2">
        Somos un equipo de desarrolladores apasionado por la innovación y la seguridad digital, 
        <br />
        <br />
        nuestra misión es ofrecer soluciones simples y confiables que ayuden a las personas y empresas a sentirse protegidas en todo momento.
      </p>
    </div>
  </section>
  );
}
