---
title: Access.Database
---

# Access.Database


Palauttaa Access-tietokannan rakenteellisen esityksen.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Palauttaa Access-tietokannan `database` rakenteellisen esityksen. Valinnainen tietueparametri `options` voidaan määrittää seuraavien asetusten hallintaa varten:

-   `CreateNavigationProperties` : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on false).
-   `NavigationPropertyNameGenerator` : Funktio, jota käytetään luomaan nimiä siirtymisominaisuuksia varten.

Tietueparametri määritetään esimerkiksi muodossa \[asetus1 = arvo1, asetus2 = arvo2...\].



## Category
Accessing data
