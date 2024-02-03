---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą pagal nurodytus poslinkius ir ilgius.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą pagal nurodytus poslinkius ir ilgius. Null ilgis rodo, kad reikia įtraukti visą likusią įvestį.


## Examples

### Example #1 
Išskaidykite įvestį pagal nurodytą padėtį ir ilgio poras pradėdami nuo įvesties pradžios. Atkreipkite dėmesį, kad diapazonai šiame pavyzdyje persidengia.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Išskaidykite įvestį pagal nurodytą padėtį ir ilgio poras pradėdami nuo įvesties pabaigos.
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
Išskaidykite įvestį į fiksuoto ilgio pašto indeksą, po kurio pateikiamas kintamojo ilgio miesto pavadinimas.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
