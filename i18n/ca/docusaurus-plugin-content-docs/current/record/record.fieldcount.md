---
title: Record.FieldCount
---

# Record.FieldCount


Retorna el nombre de camps del registre.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Retorna el nombre de camps del registre `record`.


## Examples

### Example #1
Cerca el nombre de camps del registre.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
