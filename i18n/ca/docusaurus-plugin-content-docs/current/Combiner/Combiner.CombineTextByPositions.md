---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Retorna una funció que combina una llista de text mitjançant les posicions de sortida especificades.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Retorna una funció que combina una llista de valors de text en un únic valor de text mitjançant les posicions de sortida especificades.


## Examples

### Example #1 
Combina una llista de valors de text col·locant-los al resultat a les posicions especificades.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
