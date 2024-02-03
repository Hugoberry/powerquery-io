---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Palauttaa Essbase-palvelimen Essbase-esiintymässä ryhmitellyt kuutiot.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Palauttaa taulukon Essbase-palvelimen APS-palvelimen <code>url</code> Essbase-esiintymästä ryhmittelemistä kuutioista. Valinnainen tietueparametri <code>options</code> voidaan määrittää ohjaamaan seuraavia asetuksia:     <ul><li><code>CommandTimeout</code> : Kesto, joka m&#228;&#228;ritt&#228;&#228;, miten kauan palvelinpuolen kysely&#228; saadaan suorittaa, ennen kuin se peruutetaan. Oletusarvo on kymmenen minuuttia.</li></ul>



## Category
Accessing data
