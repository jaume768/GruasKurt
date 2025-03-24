import React from 'react';
import './css/Legal.css';

const LegalNotice = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <h1 className="legal-title">Aviso Legal</h1>
        
        <div className="legal-content">
          <p>
            En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, 
            de Servicios de la Sociedad de la Información y de Comercio Electrónico, a continuación se reflejan los 
            siguientes datos: La empresa titular de la web (en adelante, LA EMPRESA) pone a su disposición la siguiente información:
          </p>
          
          <div className="company-info">
            <p><strong>Identificación:</strong> GRÚAS PERELLÓ, S.L.</p>
            <p><strong>CIF:</strong> </p>
            <p><strong>Dirección:</strong> Vía Argentina 57, 07200, Felanitx, Baleares</p>
            <p><strong>Teléfono:</strong> +34 971 58 12 60</p>
            <p><strong>Email:</strong> Gruasperello@gmail.com</p>
          </div>
          
          <p>
            La utilización de la web le atribuye la condición de usuario de la web (en adelante, el "Usuario") e implica 
            la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal en 
            la versión publicada por LA EMPRESA en el momento mismo en que el Usuario acceda a la Web. LA EMPRESA se reserva 
            el derecho a modificar unilateralmente, en cualquier momento y sin previo aviso, la presentación y configuración 
            de los contenidos y los servicios de la Web, así como las condiciones requeridas para su utilización cuando ello 
            sea conveniente para su mejor prestación.
          </p>
          
          <p>
            El contenido de la presente web está protegido por las leyes de propiedad intelectual.
          </p>
          
          <p>
            Dichos contenidos deberán ser usados de forma correcta y licita por el usuario y, en particular queda obligado 
            a utilizar dichos contenidos de forma diligente, correcta y lícita.
          </p>
          
          <p>
            No podrán usarse los contenidos de forma contraria a la ley, a la moral o a las buenas costumbres aceptadas en orden público.
          </p>
          
          <p>
            Está prohibida la transmisión de cualquier tipo de datos que usted pueda realizar a esta web, o a otros pertenecientes 
            a terceras empresas cuyos links podrá encontrar dentro de esta web, que atente contra los derechos de propiedad de 
            terceros de carácter amenazador o material que pueda ser considerado delito o falta en virtud del vigente Código Penal.
          </p>
          
          <p>
            Queda prohibida la reproducción, copia, distribución, transformación o modificación de contenidos (textos, imágenes, 
            voces o estructura) a menos que se cuente con la autorización expresa y por escrito del titular de los derechos adquiridos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
