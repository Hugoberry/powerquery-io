---
title: Essbase.Cubes
---

# Essbase.Cubes


Palauttaa Essbase-palvelimen Essbase-esiintymässä ryhmitellyt kuutiot.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon Essbase-palvelimen APS-palvelimen `url` Essbase-esiintymästä ryhmittelemistä kuutioista. Valinnainen tietueparametri `options` voidaan määrittää ohjaamaan seuraavia asetuksia:

-   `CommandTimeout` : Kesto, joka määrittää, miten kauan palvelinpuolen kyselyä saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.



## Category
Accessing data
