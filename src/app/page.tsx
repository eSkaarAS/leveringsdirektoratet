import Image from "next/image";

export default function HomePage() {
  return (
    <div className="mx-auto my-0 w-4/5 rounded-lg bg-white p-5 shadow-lg">
      <div className="mb-5 flex w-full items-center justify-center">
        <Image src="/logo.jpeg" alt="Logo" width={150} height={150} />
      </div>
      <H1>Velkommen til fagdag med Leveringsdirektoratet!</H1>
      <P>
        Leveringsdirektoratet har gleden av å invitere deg til vår Fagdag som
        vil finne sted på vakre Lindås den 27. juli. Dette er en unik mulighet
        til å fordype seg i de nyeste trendene og innovasjonene innen levering,
        samt bygge verdifulle nettverk med Europas fremste fagmiljøer på
        levering.
      </P>

      <H2>Overlevering - et problem?</H2>
      <P>
        Utforsk de komplekse dynamikkene ved overlevering i et stadig skiftende
        marked. Dette foredraget dykker dypt inn i utfordringene og løsningene
        ved effektiv overlevering, med fokus på strategisk implementering,
        optimalisering av ressursallokering, og bruk av avanserte teknologier
        som AI og Big Data. Delta for å lære hvordan du kan minimere friksjon og
        maksimerer verdiskaping gjennom innovative tilnærminger til
        overlevering.
      </P>
      <H2>Mangfold i leveringen</H2>
      <P>
        Som alle vet betyr det veldig mye å ha det sykt lættis med gutta, heeele
        tiden. Men er det mulig med en mer inkluderende levering med damene og?
        Dette foredraget utforsker hvordan vi kan skape en leveringskultur som
        omfavner mangfold og inkludering. Vi vil diskutere strategier for å
        sikre at alle stemmer blir hørt og verdsatt i leveringsprosessen,
        uavhengig av kjønn, bakgrunn eller erfaring. Gjennom casestudier og
        beste praksis vil vi vise hvordan inkluderende team kan føre til økt
        innovasjon, forbedret ytelse og bedre resultater. Bli med for å lære
        hvordan du kan bygge en mer inkluderende leveringsprosess som ikke bare
        er rettferdig, men også lønnsom og bærekraftig.
      </P>
      <H2>Ende til ende levering</H2>
      <P>
        Utforsk de nyeste strategiene for ende-til-ende levering som integrerer
        sømløse prosesser, optimaliserer forsyningskjeder og utnytter avansert
        logistikkteknologi. Vi vil dykke dypt inn i hvordan automatisering,
        dataanalyse og real-time tracking kan transformere leveringsopplevelsen
        og øke kundetilfredshet.
      </P>

      <hr className="my-5" />
      <div className="director">
        <Image src="/logo.jpeg" alt="Logo" width={100} height={100} />
      </div>

      <div className="practical-info">
        <H2>Praktisk informasjon</H2>
        <P>
          <strong>Sted:</strong> Lindås, Norge
        </P>
        <P>
          <strong>Dato og tid:</strong> 27. juli, 13:00 - 02:00
        </P>
        <P>
          <strong>Se beliggenhet:</strong>{" "}
          <a
            className="underline"
            href="https://maps.app.goo.gl/5toNZuZCRHpSjKZd8"
            target="_blank"
          >
            Google Maps
          </a>
        </P>
      </div>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mx-0 my-5 text-xl">{children}</p>;
}

function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="m-0 flex items-center justify-center text-center text-4xl font-bold">
      {children}
    </h1>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold text-[#2980b9]">{children}</h2>;
}
