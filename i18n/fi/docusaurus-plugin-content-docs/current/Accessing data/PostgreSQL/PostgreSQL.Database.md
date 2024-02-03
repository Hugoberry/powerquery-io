---
title: PostgreSQL.Database
---

# PostgreSQL.Database


## Description

Palauttaa PostgreSQL-tietokannassa käytettävissä olevien SQL-taulukoiden ja näkymien taulukon.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Palauttaa tietokantaesiintymän <code>database</code> palvelimen <code>server</code> PostgreSQL-tietokannassa käytettävissä olevien SQL-taulukoiden ja näkymien taulukon. Portti voidaan valinnaisesti määrittää palvelimen kanssa kaksoispisteellä eroteltuna. Valinnainen tietueparametri <code>options</code> voidaan määrittää seuraavien asetusten hallintaa varten:    <ul><li><code>CreateNavigationProperties</code> : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true).</li><li><code>NavigationPropertyNameGenerator</code> : Funktio, jota k&#228;ytet&#228;&#228;n luomaan nimi&#228; siirtymisominaisuuksia varten.</li><li><code>Query</code> : Alkuper&#228;inen SQL-kysely, jota k&#228;ytet&#228;&#228;n tietojen noutamiseen. Jos kysely tuottaa useita tulosjoukkoja, vain ensimm&#228;inen palautetaan.</li><li><code>CommandTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan palvelinpuolen kysely&#228; saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.</li><li><code>ConnectionTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan odotetaan, ennen kuin yritys yhdist&#228;&#228; palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.</li><li><code>HierarchicalNavigation</code> : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyin&#228; niiden rakenteiden nimien mukaan (oletusarvo on false).</li></ul>    Tietueparametri määritetään esimerkiksi joko muodossa [vaihtoehto1 = arvo1, vaihtoehto2 = arvo2...] tai [Query = "select ..."].    



## Category
Accessing data
