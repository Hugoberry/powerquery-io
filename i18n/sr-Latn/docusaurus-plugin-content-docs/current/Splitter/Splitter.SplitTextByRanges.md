---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Vraća funkciju koja deli tekst na listu teksta prema navedenim pomacima i dužinama.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Vraća funkciju koja deli tekst na listu sa tekstom u skladu sa navedenim pomacima i dužinama. Dužina bez vrednosti ukazuje na to da svi preostali unosi treba da budu uključeni.


## Examples

### Example #1 
Razdelite unos po navedenim parovima položaja i dužine, počevši od početka unosa. Imajte u vidu da se opsezi u ovom primeru preklapaju.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Razdelite unos po navedenim parovima položaja i dužine, počevši od kraja unosa.
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
Podelite unos na poštanski broj fiksne dužine praćen imenom grada promenljive dužine.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
