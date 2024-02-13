---
title: List.IsEmpty
---

# List.IsEmpty


Retourne la valeur true si la liste est vide.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Retourne <code>true</code> si la liste <code>list</code> ne contient pas de valeurs (longueur 0). Si la liste contient des valeurs (longueur > 0), retourne <code>false</code>.


## Examples

### Example #1 
Détermine si la liste \{} est vide.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Détermine si la liste \{1, 2} est vide.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
