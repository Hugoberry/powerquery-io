---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Palauttaa raporttipaketit Adobe Analyticsissa.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Palauttaa monidimensiopakettien taulukon Adobe Analyticsista. Valinnainen tietueparametri `options`voidaan määrittää ohjaamaan seuraavia asetuksia:

-   `HierarchicalNavigation` : Looginen arvo (true/false), joka asettaa, tarkastellaanko taulukoita ryhmiteltyinä niiden rakenteiden nimien mukaan (oletusarvo on false).
-   `MaxRetryCount` : Kyselyn tuloksen kyselyn aikana suoritettavien uudelleenyritysten määrä. Oletusarvo on 120.
-   `RetryInterval` : Aika uudelleenyritysten välillä. Oletusarvo on yksi sekunti.
-   `Implementation` : Määrittää Adobe Analytics -ohjelmointirajapinnan version. Kelvolliset arvot ovat: "2.0". Oletusarvo käyttää ohjelmointirajapinnan versiota 1.4.



## Category
Accessing data
