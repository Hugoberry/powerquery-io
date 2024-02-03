---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Devolve unha función que divide texto nunha lista de texto segundo as lonxitudes e os desprazamentos especificados.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Devolve unha función que divide o texto nunha lista de texto segundo os desprazamentos e lonxitudes especificados. Unha lonxitude nula indica que se deben incluír todas as entradas restantes.


## Examples

### Example #1 
Divide a entrada polos pares de posición e lonxitude especificados, comezando desde o principio da entrada. Ten en conta que os intervalos deste exemplo se solapan.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Divide a entrada polos pares de posición e lonxitude especificados, comezando dende o final da entrada.
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
Divide a entrada nun código postal de lonxitude fixa seguido dun nome de cidade de lonxitude variable.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
