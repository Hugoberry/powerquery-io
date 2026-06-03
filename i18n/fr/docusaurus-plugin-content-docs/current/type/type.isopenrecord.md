---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Retourne une valeur qui indique si un type d'enregistrement est ouvert.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Retourne une valeur `logical` qui indique si un enregistrement `type` est ouvert.


## Examples

### Example #1
Détermine si l'enregistrement `type [ A = number, ...]` est ouvert.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
