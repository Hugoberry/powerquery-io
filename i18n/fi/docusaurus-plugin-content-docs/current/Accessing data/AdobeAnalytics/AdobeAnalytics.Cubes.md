---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Palauttaa raporttipaketit Adobe Analyticsissa.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Palauttaa monidimensiopakettien taulukon Adobe Analyticsista. Valinnainen tietueparametri <code>options</code>voidaan määrittää ohjaamaan seuraavia asetuksia:    <ul><li><code>HierarchicalNavigation</code> : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyin&#228; niiden rakenteiden nimien mukaan (oletusarvo on false).</li><li><code>MaxRetryCount</code> : Kyselyn tuloksen kyselyn aikana suoritettavien uudelleenyritysten m&#228;&#228;r&#228;. Oletusarvo on 120.</li><li><code>RetryInterval</code> : Aika uudelleenyritysten v&#228;lill&#228;. Oletusarvo on yksi sekunti.</li><li><code>Implementation</code> : M&#228;&#228;ritt&#228;&#228; Adobe Analytics -ohjelmointirajapinnan version. Kelvolliset arvot ovat: &quot;2.0&quot;. Oletusarvo k&#228;ytt&#228;&#228; ohjelmointirajapinnan versiota 1.4.</li></ul>    



## Category
Accessing data
