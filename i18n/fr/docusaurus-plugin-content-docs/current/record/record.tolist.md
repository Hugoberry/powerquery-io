---
title: Record.ToList
---

# Record.ToList


Retourne une liste de valeurs contenant les valeurs de champ de l'enregistrement d'entrée.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Retourne une liste de valeurs contenant les valeurs de champ de l'entrée `record`.


## Examples

### Example #1
Extrayez les valeurs de champ d'un enregistrement.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
