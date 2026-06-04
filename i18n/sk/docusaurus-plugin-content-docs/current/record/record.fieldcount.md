---
title: Record.FieldCount
---

# Record.FieldCount


Vráti počet polí v zázname.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Vráti počet polí v zázname `record`.


## Examples

### Example #1
Nájdite počet polí v zázname.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
