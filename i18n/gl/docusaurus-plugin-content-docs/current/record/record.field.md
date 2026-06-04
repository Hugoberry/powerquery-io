---
title: Record.Field
---

# Record.Field


Devolve o valor do campo especificado nun rexistro.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Devolve o valor do `field` especificado no `record`. Se non se atopa o campo, xérase un erro.


## Examples

### Example #1
Buscar o valor do campo "CustomerID" no rexistro.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
