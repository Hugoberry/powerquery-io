---
title: Sql.Database
---

# Sql.Database


## Description

Palauttaa SQL Server -tietokannan SQL-taulukoiden, näkymien ja tallennettujen funktioiden taulukon.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Palauttaa SQL-taulukoiden sekä -näkymien ja tallennettujen SQL-funktioiden taulukon palvelimen <code>server</code> SQL Server -tietokannasta <code>database</code>. Portti voidaan valinnaisesti määrittää palvelimen kanssa erotettuna kaksoispisteellä tai pilkulla. Valinnainen tietueparametri <code>options</code> voidaan määrittää seuraavien asetusten hallintaa varten:    <ul><li><code>Query</code> : Alkuper&#228;inen SQL-kysely, jota k&#228;ytet&#228;&#228;n tietojen noutamiseen. Jos kysely tuottaa useita tulosjoukkoja, vain ensimm&#228;inen palautetaan.</li><li><code>CreateNavigationProperties</code> : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on true).</li><li><code>NavigationPropertyNameGenerator</code> : Funktio, jota k&#228;ytet&#228;&#228;n luomaan nimi&#228; siirtymisominaisuuksia varten.</li><li><code>MaxDegreeOfParallelism</code> : Luku, joka asettaa maxdop-kyselylauseen arvon muodostetussa SQL-kyselyss&#228;.</li><li><code>CommandTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan palvelinpuolen kysely&#228; saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.</li><li><code>ConnectionTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan odotetaan, ennen kuin yritys yhdist&#228;&#228; palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.</li><li><code>HierarchicalNavigation</code> : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyin&#228; niiden rakenteiden nimien mukaan (oletusarvo on false).</li><li><code>MultiSubnetFailover</code> : Looginen arvo (true/false), joka asettaa MultiSubnetFailover-ominaisuuden arvon yhteysmerkkijonossa (oletusarvo on false).</li><li><code>UnsafeTypeConversions</code> : Looginen arvo (true/false), joka arvon ollessa true yritt&#228;&#228; delegoida l&#228;hteeseen tyyppimuunnoksia, mik&#228; voi ep&#228;onnistua ja aiheuttaa koko kyselyn ep&#228;onnistumisen. Ei suositella yleiseen k&#228;ytt&#246;&#246;n.</li><li><code>ContextInfo</code> : Binaariarvo, jota k&#228;ytet&#228;&#228;n asettamaan CONTEXT_INFO ennen kunkin komennon suorittamista.</li><li><code>OmitSRID</code> : Looginen arvo (true/false), joka arvon ollessa tosi j&#228;tt&#228;&#228; pois SRID-kohteen tuotettaessa Well-Known Texti&#228; geometria- ja maantiedetyypeist&#228;.</li><li><code>EnableCrossDatabaseFolding</code> : Looginen arvo (tosi/ep&#228;tosi), joka arvon ollessa tosi sallii kyselyn delegoinnin l&#228;hteeseen saman palvelimen eri tietokannoissa. Oletusarvo on ep&#228;tosi.</li></ul>    Tietueparametri määritetään esimerkiksi muodossa [asetus1 = arvo1, asetus2 = arvo2...] tai [Query = "select ..."].    



## Category
Accessing data
