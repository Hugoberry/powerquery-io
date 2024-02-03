---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši norādītajām nobīdēm un garuma vērtībām, izveidojot teksta vērtību sarakstu.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši norādītajai nobīdei un garumam, sadalot tekstu teksta sarakstā. Nulles garums norāda, ka ir jāietver visa atlikusī ievade.


## Examples

### Example #1 
Sadalīt ievadi pēc norādītās pozīcijas un garuma pāriem, sākot no ievades sākuma. Ņemiet vērā, ka diapazoni šajā piemērā pārklājas.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Sadalīt ievadi pēc norādītās pozīcijas un garuma pāriem, sākot no ievades beigām.
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
Sadalīt ievadi fiksēta garuma pasta indeksā, kam seko mainīga garuma pilsētas nosaukums.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
