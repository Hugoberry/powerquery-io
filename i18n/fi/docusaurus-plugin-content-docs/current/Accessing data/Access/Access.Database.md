---
title: Access.Database
---

# Access.Database


## Description

Palauttaa Access-tietokannan rakenteellisen esityksen.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Palauttaa Access-tietokannan <code>database</code> rakenteellisen esityksen. Valinnainen tietueparametri <code>options</code> voidaan määrittää seuraavien asetusten hallintaa varten:    <ul><li><code>CreateNavigationProperties</code> : Looginen arvo (true/false), joka asettaa, muodostetaanko siirtymisominaisuudet palautetuille arvoille (oletusarvo on false).</li><li><code>NavigationPropertyNameGenerator</code> : Funktio, jota k&#228;ytet&#228;&#228;n luomaan nimi&#228; siirtymisominaisuuksia varten.</li></ul>    Tietueparametri määritetään esimerkiksi muodossa [asetus1 = arvo1, asetus2 = arvo2...].



## Category
Accessing data
