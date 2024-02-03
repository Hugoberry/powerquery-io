---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Tuonnin/DirectQuery-kuution tiedot AtScale-kohteesta.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Palauttaa kuutiotiedot AtScale-kohteesta palvelimessa <code>server</code>. Valinnainen tietueparametri <code>options</code> voidaan määrittää ohjaamaan seuraavia asetuksia:<ul>        <li><code>TypedMeasureColumns</code>: Looginen arvo, joka ilmaisee, käytetäänkö monidimensioisessa tai taulukkomuotoisessa mallissa määritettyjä tyyppejä lisättyjen mittayksikkösarakkeiden tyypeille. Kun asetus on false, tyyppiä number käytetään kaikille mittayksikkösarakkeille. Tämä asetuksen oletusarvo on false.</li>        <li><code>CommandTimeout</code>: kesto (sekunteina), joka määrittää, miten kauan palvelinpuolen kyselyä sallitaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on ohjainsidonnainen. </li>        <li><code>ConnectionTimeout</code>: Kesto (sekunteina), joka määrittää, miten kauan odotetaan, ennen kuin keskeytetään yritys muodostaa yhteys palvelimeen. Oletusarvo on ohjainsidonnainen. </li></ul>Tietueparametri määritetään muodossa [asetus1 = arvo1, asetus2 = arvo2...].


