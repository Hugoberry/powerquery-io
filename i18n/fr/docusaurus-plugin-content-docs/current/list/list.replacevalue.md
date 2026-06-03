---
title: List.ReplaceValue
---

# List.ReplaceValue


Recherche une liste pour la valeur spécifiée et la remplace.


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Remarks

Recherche une liste de valeurs, `list`, pour la valeur `oldValue` et remplace chaque occurrence avec la valeur de remplacement `newValue`.


## Examples

### Example #1
Remplace toutes les valeurs "a" dans la liste \{"a", "B", "a", "a"\} par "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
