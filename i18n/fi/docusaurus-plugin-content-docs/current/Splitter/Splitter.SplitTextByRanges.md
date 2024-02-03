---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi määritettyjen siirtymien ja pituuksien mukaisesti.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Palauttaa funktion, joka jakaa tekstin tekstiluetteloksi määritettyjen siirtymien ja pituuksien mukaan. Tyhjäarvo ilmaisee, että kaikki jäljellä olevat syötteet tulee sisällyttää.


## Examples

### Example #1 
Jaa syöte määritetyn sijainnin ja pituusparin mukaan syötteen alusta alkaen. Huomaa, että tämän esimerkin alueet ovat päällekkäin.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Jaa syöte määritetyn sijainnin ja pituusparin mukaan syötteen lopusta alkaen.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Jaa syöte kiinteän pituiseksi postinumeroksi ja sen jälkeen vaihtelevan pituiseksi kaupungin nimeksi.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
