---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Retorna una funció que divideix el text en una llista de text d&#39;acord amb els desplaçaments i les longituds especificats.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Retorna una funció que divideix el text en una llista de text d'acord amb els desplaçaments i les longituds especificats. Una longitud nul·la indica que s'han d'incloure totes les entrades restants.


## Examples

### Example #1 
Divideix l&#39;entrada pels parells de posició i longitud especificats, començant pel principi de l&#39;entrada. Teniu en compte que els intervals d&#39;aquest exemple se superposen.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Divideix l&#39;entrada pels parells de posició i longitud especificats, començant pel final de l&#39;entrada.
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
Dividiu l&#39;entrada en un codi postal de longitud fixa seguit d&#39;un nom de ciutat de longitud variable.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
