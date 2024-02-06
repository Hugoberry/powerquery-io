---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


Retourne une fonction qui fractionne le texte en une liste de textes selon les décalages et les longueurs spécifiés.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Retourne une fonction qui fractionne le texte en une liste de textes en fonction des décalages et des longueurs spécifiés. Une longueur null indique que toutes les entrées restantes doivent être incluses.


## Examples

### Example #1 
Divise l&#39;entrée par les paires position et longueur spécifiées, en commençant par le début de l&#39;entrée. Notez que les plages dans cet exemple se chevauchent.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Divise l&#39;entrée par les paires de position et de longueur spécifiées, en commençant par la fin de l&#39;entrée.
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
Fractionner l’entrée en un code postal de longueur fixe suivi d’un nom de ville de longueur variable
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
