---
title: DB2.Database
---

# DB2.Database


Palauttaa Db2-tietokannassa käytettävissä olevien SQL-taulukoiden ja näkymien taulukon.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Palauttaa tietokantaesiintymän `server` palvelimen `database` Db2-tietokannassa käytettävissä olevien SQL-taulukoiden ja -näkymien taulukon. Portti voidaan valinnaisesti määrittää palvelimen kanssa erotettuna kaksoispisteellä. Valinnainen tietueparametri `options` voidaan määrittää seuraavien asetusten hallintaa varten:

-   `CreateNavigationProperties` : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true).
-   `NavigationPropertyNameGenerator` : Funktio, jota käytetään luomaan nimiä siirtymisominaisuuksia varten.
-   `Query` : Alkuperäinen SQL-kysely, jota käytetään tietojen noutamiseen. Jos kysely tuottaa useita tulosjoukkoja, vain ensimmäinen palautetaan.
-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.
-   `ConnectionTimeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.
-   `HierarchicalNavigation` : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyinä niiden rakenteiden nimien mukaan (oletusarvo on false).
-   `Implementation` : Määrittää käytettävän sisäisen tietokantapalvelun toteutuksen. Kelvolliset arvot ovat: IBM ja Microsoft.
-   `BinaryCodePage` : Luku CCSID:lle (Coded Character Set Identifier) Db2 FOR BIT -binaaritietojen koodauksen purkamiseen merkkimerkkijonoiksi. Koskee asetusta Implementation = "Microsoft". Aseta arvoksi 0, jos haluat poistaa muuntamisen käytöstä (oletus). Aseta arvoksi 1, jos haluat muuntaa tietokannan koodauksen perusteella. Aseta muu CCSID-luku, jos haluat muuntaa sovelluksen koodaukseksi.
-   `PackageCollection` : Määrittää merkkijonoarvon pakettikokoelmalle (oletusarvo on NULLID), jotta SQL-lausekkeiden käsittelemiseen vaadittuja jaettuja paketteja voidaan käyttää. Koskee asetusta Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Määrittää, muodostetaanko yhteys Db2 Connectin yhdyskäytävän kautta. Koskee toteutusta Microsoft.

Tietueparametri määritetään esimerkiksi muodossa \[asetus1 = arvo1, asetus2 = arvo2...\] tai \[Query = "select ..."\].



## Category
Accessing data
