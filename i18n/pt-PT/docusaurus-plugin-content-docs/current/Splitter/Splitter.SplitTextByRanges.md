---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Devolve uma função que divide texto numa lista de texto de acordo com os desvios e os comprimentos especificados.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Devolve uma função que divide o texto numa lista de texto de acordo com os desvios e comprimentos especificados. Um comprimento nulo indica que todas as entradas restantes deverão ser incluídas.


## Examples

### Example #1 
Divida a entrada pelos pares de posição e comprimento especificados, a partir do início da entrada. Note que os intervalos neste exemplo sobrepõem-se.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Divida a entrada pelos pares de posição e comprimento especificados, a partir do fim da entrada.
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
Divida a entrada num código postal de comprimento fixo seguido de um nome de cidade de comprimento variável.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
