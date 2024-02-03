---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Egy olyan függvényt ad vissza, amely felosztja a szöveget egy szöveges értékekből álló listára a megadott eltolások és hosszak figyelembevételével.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Olyan függvényt ad vissza, amely egy szöveglistára osztja fel a szöveget a megadott eltolások és hosszúságok alapján. A null hosszúságérték azt jelzi, hogy az összes fennmaradó bemenetet bele kell foglalni.


## Examples

### Example #1 
A bemenet felosztása a megadott pozíció- és hosszpárokkal, a bemenet elejétől kezdve. Ebben a példában a tartományok átfedik egymást.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
A bemenet felosztása a megadott pozíció- és hosszpárokkal, a bemenet végétől kezdve.
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
Ossza fel a bemenetet egy fix hosszúságú irányítószámra, amelyet egy változó hosszúságú városnév követ.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
