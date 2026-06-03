---
title: List.IsDistinct
---

# List.IsDistinct


Indique s'il y a des doublons dans la liste.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Retourne une valeur logique s'il existe des doublons dans la liste `list` ; `true` si la liste est distincte, `false` s'il y a des valeurs dupliquées.


## Examples

### Example #1
Détermine si la liste \{1, 2, 3\} est distincte (c'est-à-dire, sans doublons).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Détermine si la liste \{1, 2, 3, 3\}est distincte (c'est-à-dire, sans doublons).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
