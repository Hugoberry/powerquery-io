---
title: Record.FieldCount
---

# Record.FieldCount


Devolve o número de campos do rexistro.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Devolve o número de campos do rexistro `record`.


## Examples

### Example #1
Buscar o número de campos do rexistro.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
