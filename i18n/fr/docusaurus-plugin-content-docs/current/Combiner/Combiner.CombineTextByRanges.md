---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Retourne une fonction qui associe une liste de textes dans un seul fichier texte à l&#39;aide des positions et longueurs spécifiées.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Retourne une fonction qui combine une liste de texte en un seul texte à l’aide des positions et longueurs spécifiées. Une longueur null indique que la valeur de texte entière doit être incluse.



## Category
Combiner
