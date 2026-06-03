---
title: Record.FieldCount
---

# Record.FieldCount


Retourne le nombre de champs dans l'enregistrement.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Retourne le nombre de champs dans l'enregistrement `record`.


## Examples

### Example #1
Recherche le nombre de champs dans l'enregistrement.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
