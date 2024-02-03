---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Retorna una funció que combina una llista de text mitjançant les posicions i longituds especificades.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Retorna una funció que combina una llista de valors de text en un únic valor de text mitjançant les posicions de sortida i les longituds especificades. Una longitud nul·la indica que s'ha d'incloure tot el valor de text.


## Examples

### Example #1 
Combina una llista de valors de text amb les posicions i longituds de sortida especificades.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
