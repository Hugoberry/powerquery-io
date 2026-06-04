---
title: PostgreSQL.Database
---

# PostgreSQL.Database


Palauttaa PostgreSQL-tietokannassa käytettävissä olevien SQL-taulukoiden ja näkymien taulukon.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Palauttaa tietokantaesiintymän `server` palvelimen `database` PostgreSQL-tietokannassa käytettävissä olevien SQL-taulukoiden ja näkymien taulukon. Portti voidaan valinnaisesti määrittää palvelimen kanssa erotettuna kaksoispisteellä. Valinnainen tietueparametri `options` voidaan määrittää seuraavien asetusten hallintaa varten:

-   `CreateNavigationProperties` : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true).
-   `NavigationPropertyNameGenerator` : Funktio, jota käytetään luomaan nimiä siirtymisominaisuuksia varten.
-   `Query` : Alkuperäinen SQL-kysely, jota käytetään tietojen noutamiseen. Jos kysely tuottaa useita tulosjoukkoja, vain ensimmäinen palautetaan.
-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.
-   `ConnectionTimeout` : Kesto, joka määrittää, miten kauan odotetaan, ennen kuin yritys yhdistää palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.
-   `HierarchicalNavigation` : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyinä niiden rakenteiden nimien mukaan (oletusarvo on false).

Tietueparametri määritetään esimerkiksi muodossa \[asetus1 = arvo1, asetus2 = arvo2...\] tai \[Query = "select ..."\].



## Category
Accessing data
