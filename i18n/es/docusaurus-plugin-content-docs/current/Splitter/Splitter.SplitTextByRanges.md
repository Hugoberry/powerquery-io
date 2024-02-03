---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Devuelve una función que divide el texto en una lista de texto según los desplazamientos y longitudes especificados.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Devuelve una función que divide el texto en una lista de texto según los desplazamientos y longitudes especificados. Una longitud nula indica que se deben incluir todas las entradas restantes.


## Examples

### Example #1 
Divida la entrada por los pares de posición y longitud especificados, empezando desde el principio de la entrada. Tenga en cuenta que los intervalos de este ejemplo se superponen.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Divida la entrada por los pares de posición y longitud especificados, empezando desde el final de la entrada.
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
Dividir la entrada en un código postal de longitud fija seguido de un nombre de ciudad de longitud variable.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
