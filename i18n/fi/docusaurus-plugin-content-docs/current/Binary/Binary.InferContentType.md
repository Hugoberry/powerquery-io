---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Lukee binaarivirran ja yrittää selvittää virran sisällön tyypin ja muodon tiedot.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Palauttaa tietueen, jossa on kenttä Content.Type, joka sisältää johdetun MIME-tyypin.    Jos johdettu sisällön tyyppi on text/\* ja havaitaan koodauksen koodisivu, palauttaa lisäksi kentän Content.Encoding, joka sisältää virran koodauksen.    Jos johdettu sisällön tyyppi on text/csv ja muoto on erotettu, palauttaa lisäksi kentän Csv.PotentialDelimiter, joka sisältää taulukon mahdollisten erottimien analysointia varten.    Jos johdettu sisällön tyyppi on text/csv ja muoto on fixed-width, palauttaa lisäksi kentän Csv.PotentialPositions, joka sisältää luettelon mahdollisten kiinteänlevyisten sarakepaikkojen analysointia varten.



## Category
Binary
