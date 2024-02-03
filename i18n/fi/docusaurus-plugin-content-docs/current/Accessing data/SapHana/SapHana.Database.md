---
title: SapHana.Database
---

# SapHana.Database


## Description

Palauttaa SAP HANA -tietokannan paketit.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Palauttaa moniulotteisten pakettien taulukon SAP HANA -tietokannasta <code>server</code>. Valinnainen tietueparametri <code>options</code> voidaan määrittää ohjaamaan seuraavia asetuksia:    <ul><li><code>Query</code> : Alkuper&#228;inen SQL-kysely, jota k&#228;ytet&#228;&#228;n tietojen noutamiseen. Jos kysely tuottaa useita tulosjoukkoja, vain ensimm&#228;inen palautetaan.</li><li><code>Distribution</code> : SapHanaDistribution, joka asettaa yhteysmerkkijonon Distribution-ominaisuuden arvon. Lausekkeen reitityksen avulla arvioidaan hajautetun j&#228;rjestelm&#228;n oikea palvelinsolmu. Oletusarvo on SapHanaDistribution.All.</li><li><code>Implementation</code> : M&#228;&#228;ritt&#228;&#228; k&#228;ytett&#228;v&#228;n SAP HANA -liittimen toteutuksen.</li><li><code>EnableColumnBinding</code> : Sitoo muuttujat SAP HANA -tulosjoukon sarakkeisiin tietoja noudettaessa. Saattaa parantaa suorituskyky&#228;, mutta muistia k&#228;ytet&#228;&#228;n enemm&#228;n. Oletusarvo on ep&#228;tosi.</li><li><code>ConnectionTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan odotetaan, ennen kuin yritys yhdist&#228;&#228; palvelimeen lopetetaan. Oletusarvo on 15 sekuntia.</li><li><code>CommandTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan palvelinpuolen kysely&#228; saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.</li></ul>    



## Category
Accessing data
