---
title: AtScale.Cubes
---

# AtScale.Cubes


Tuonnin/DirectQuery-kuution tiedot AtScale-kohteesta.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Palauttaa kuutiotiedot AtScale-kohteesta palvelimessa `server`. Valinnainen tietueparametri `options` voidaan määrittää ohjaamaan seuraavia asetuksia:

-   `TypedMeasureColumns`: Looginen arvo, joka ilmaisee, käytetäänkö monidimensioisessa tai taulukkomuotoisessa mallissa määritettyjä tyyppejä lisättyjen mittayksikkösarakkeiden tyypeille. Kun asetus on false, tyyppiä number käytetään kaikille mittayksikkösarakkeille. Tämä asetuksen oletusarvo on false.
-   `CommandTimeout`: kesto (sekunteina), joka määrittää, miten kauan palvelinpuolen kyselyä sallitaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on ohjainsidonnainen.
-   `ConnectionTimeout`: Kesto (sekunteina), joka määrittää, miten kauan odotetaan, ennen kuin keskeytetään yritys muodostaa yhteys palvelimeen. Oletusarvo on ohjainsidonnainen.

Tietueparametri määritetään muodossa \[asetus1 = arvo1, asetus2 = arvo2...\].


## Examples

### Example #1
Luettelo kuution tiedoista AtScale-kuutiossa.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



