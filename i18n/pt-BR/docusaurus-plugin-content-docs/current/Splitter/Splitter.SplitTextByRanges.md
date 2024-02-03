---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Retorna uma função que divide o texto em uma lista de texto de acordo com os deslocamentos e comprimentos especificados.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Retorna uma função que divide o texto em uma lista de texto de acordo com os deslocamentos e comprimentos especificados. Um comprimento nulo indica que todas as entradas restantes devem ser incluídas.


## Examples

### Example #1 
Divida a entrada pelos pares de posição e comprimento especificados, começando do início da entrada. Observe que os intervalos neste exemplo se sobrepõem.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Divida a entrada pelos pares de posição e comprimento especificados, começando do final da entrada.
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
Divida a entrada em um código postal de comprimento fixo seguido por um nome de cidade de comprimento variável.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
