---
title: AnalysisServices.Database
---

# AnalysisServices.Database


## Description

Palauttaa monidimensioisten kuutioiden tai taulukkomallien taulukon Analysis Services -tietokannasta.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Palauttaa moniulotteisten kuutioiden tai taulukkomallien taulukon Analysis Services -tietokannasta <code>database</code> palvelimessa <code>server</code>. Valinnainen tietueparametri <code>options</code> voidaan määrittää ohjaamaan seuraavia asetuksia:    <ul><li><code>Query</code> : Alkuper&#228;inen MDX-kysely, jota k&#228;ytet&#228;&#228;n tietojen noutamiseen.</li><li><code>TypedMeasureColumns</code> : Looginen arvo, joka ilmaisee, k&#228;ytet&#228;&#228;nk&#246; moniulotteisessa mallissa tai taulukkomallissa m&#228;&#228;ritettyj&#228; tyyppej&#228; lis&#228;ttyjen mittarisarakkeiden k&#228;ytt&#228;mille tyypeille. Kun asetus on false, tyyppi&#228; number k&#228;ytet&#228;&#228;n kaikille mittarisarakkeille. T&#228;m&#228;n asetuksen oletusarvo on false.</li><li><code>Culture</code> : Maa-asetuksen nimi, joka m&#228;&#228;ritt&#228;&#228; tietojen maa-asetuksen. T&#228;m&#228; vastaa yhteysmerkkijonon kielialueen tunnuksen ominaisuutta.</li><li><code>CommandTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan palvelinpuolen kysely&#228; saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on riippuvainen ohjaimesta.</li><li><code>ConnectionTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan odotetaan, ennen kuin yritys yhdist&#228;&#228; palvelimeen lopetetaan. Oletusarvo on riippuvainen ohjaimesta.</li><li><code>SubQueries</code> : Luku (0, 1 tai 2), joka asettaa SubQueries-ominaisuuden arvon yhteysmerkkijonossa. T&#228;m&#228; ohjaa alivalintojen tai alikuutioiden laskettujen j&#228;senten toimintaa. (Oletusarvo on 2.)</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
