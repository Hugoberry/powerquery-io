---
title: MySQL.Database
---

# MySQL.Database


## Description

Palauttaa MySQL-tietokannassa käytettävissä olevien SQL-taulukoiden, näkymien ja tallennettujen skalaarifunktioiden taulukon.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Palauttaa tietokantaesiintymässä <code>database</code> palvelimen <code>server</code> MySQL-tietokannassa käytettävissä olevien SQL-taulukoiden sekä -näkymien ja tallennettujen SQL-skalaarifunktioiden taulukon. Portti voidaan valinnaisesti määrittää palvelimen kanssa erotettuna kaksoispisteellä. Valinnainen tietueparametri <code>options</code> voidaan seuraavien asetusten hallintaa varten:    <ul><li><code>Encoding</code> : TextEncoding-arvo, joka m&#228;&#228;ritt&#228;&#228; merkist&#246;n, jota k&#228;ytet&#228;&#228;n kaikkien palvelimeen l&#228;hetett&#228;vien kyselyiden koodaamiseen (oletusarvo on tyhj&#228;arvo).</li><li><code>CreateNavigationProperties</code> : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true).</li><li><code>NavigationPropertyNameGenerator</code> : Funktio, jota k&#228;ytet&#228;&#228;n luomaan nimi&#228; siirtymisominaisuuksia varten.</li><li><code>Query</code> : Alkuper&#228;inen SQL-kysely, jota k&#228;ytet&#228;&#228;n tietojen noutamiseen. Jos kysely tuottaa useita tulosjoukkoja, vain ensimm&#228;inen palautetaan.</li><li><code>CommandTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan palvelinpuolen kysely&#228; saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.</li><li><code>ConnectionTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan odotetaan, ennen kuin yritys yhdist&#228;&#228; palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.</li><li><code>TreatTinyAsBoolean</code> : Looginen arvo (true/false), joka m&#228;&#228;ritt&#228;&#228;, pakotetaanko palvelimen pienikokonaislukusarakkeet loogisiksi arvoiksi. Oletusarvo on true.</li><li><code>OldGuids</code> : Looginen arvo (true/false), joka asettaa, k&#228;sitell&#228;&#228;nk&#246; char(36)-sarakkeita (jos false) tai binary(16)-sarakkeita (jos true) GUID-tunnuksina. Oletusarvo on false.</li><li><code>ReturnSingleDatabase</code> : Looginen arvo (true/false), joka asettaa, palautetaanko kaikkien tietokantojen kaikki taulukot (jos false) vai m&#228;&#228;ritetyn tietokannan taulukot ja n&#228;kym&#228;t (jos true). Oletusarvo on false.</li><li><code>HierarchicalNavigation</code> : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyin&#228; niiden rakenteiden nimien mukaan (oletusarvo on false).</li></ul>    Tietueparametri määritetään esimerkiksi muodossa [asetus1 = arvo1, asetus2 = arvo2...] tai [Query = "select ..."].    



## Category
Accessing data
