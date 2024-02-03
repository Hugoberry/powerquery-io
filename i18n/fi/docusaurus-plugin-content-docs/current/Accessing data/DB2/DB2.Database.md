---
title: DB2.Database
---

# DB2.Database


## Description

Palauttaa Db2-tietokannassa käytettävissä olevien SQL-taulukoiden ja näkymien taulukon.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Palauttaa tietokantaesiintymän <code>database</code> palvelimen <code>server</code> Db2-tietokannassa käytettävissä olevien SQL-taulukoiden ja -näkymien taulukon. Portti voidaan valinnaisesti määrittää palvelimen kanssa kaksoispisteellä eroteltuna. Valinnainen tietueparametri <code>options</code> voidaan määrittää seuraavien asetusten hallintaa varten:    <ul><li><code>CreateNavigationProperties</code> : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true).</li><li><code>NavigationPropertyNameGenerator</code> : Funktio, jota k&#228;ytet&#228;&#228;n luomaan nimi&#228; siirtymisominaisuuksia varten.</li><li><code>Query</code> : Alkuper&#228;inen SQL-kysely, jota k&#228;ytet&#228;&#228;n tietojen noutamiseen. Jos kysely tuottaa useita tulosjoukkoja, vain ensimm&#228;inen palautetaan.</li><li><code>CommandTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan palvelinpuolen kysely&#228; saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.</li><li><code>ConnectionTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan odotetaan, ennen kuin yritys yhdist&#228;&#228; palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.</li><li><code>HierarchicalNavigation</code> : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyin&#228; niiden rakenteiden nimien mukaan (oletusarvo on false).</li><li><code>Implementation</code> : M&#228;&#228;ritt&#228;&#228; k&#228;ytett&#228;v&#228;n sis&#228;isen tietokantapalvelun toteutuksen. Kelvolliset arvot ovat: IBM ja Microsoft.</li><li><code>BinaryCodePage</code> : Luku CCSID:lle (Coded Character Set Identifier) Db2 FOR BIT -binaaritietojen koodauksen purkamiseen merkkimerkkijonoiksi. Koskee asetusta Implementation = &quot;Microsoft&quot;. Aseta arvoksi 0, jos haluat poistaa muuntamisen k&#228;yt&#246;st&#228; (oletus). Aseta arvoksi 1, jos haluat muuntaa tietokannan koodauksen perusteella. Aseta muu CCSID-luku, jos haluat muuntaa sovelluksen koodaukseksi.</li><li><code>PackageCollection</code> : M&#228;&#228;ritt&#228;&#228; merkkijonoarvon pakettikokoelmalle (oletusarvo on NULLID), jotta SQL-lausekkeiden k&#228;sittelemiseen vaadittuja jaettuja paketteja voidaan k&#228;ytt&#228;&#228;. Koskee asetusta Implementation = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : M&#228;&#228;ritt&#228;&#228;, muodostetaanko yhteys Db2 Connectin yhdysk&#228;yt&#228;v&#228;n kautta. Koskee toteutusta Microsoft.</li></ul>    Tietueparametri määritetään esimerkiksi joko muodossa [vaihtoehto1 = arvo1, vaihtoehto2 = arvo2...] tai [Query = "select ..."].    



## Category
Accessing data
