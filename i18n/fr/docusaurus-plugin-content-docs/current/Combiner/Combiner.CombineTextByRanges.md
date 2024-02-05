---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Renvoie une fonction qui combine une liste de texte en utilisant les positions et longueurs spécifiées.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Renvoie une fonction qui combine une liste de valeurs de texte en une seule valeur de texte en utilisant les positions et longueurs de sortie spécifiées. Une longueur nulle indique que la totalité de la valeur du texte doit être incluse.


## Examples

### Example #1 
Combinez une liste de valeurs de texte en utilisant les positions et longueurs de sortie spécifiées.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
