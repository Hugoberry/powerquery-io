---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


Renvoie une fonction qui combine une liste de texte en utilisant les positions de sortie spécifiées.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Remarks

Renvoie une fonction qui combine une liste de valeurs de texte en une seule valeur de texte en utilisant les positions de sortie spécifiées.


## Examples

### Example #1 
Combinez une liste de valeurs de texte en les plaçant dans la sortie aux positions spécifiées.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
