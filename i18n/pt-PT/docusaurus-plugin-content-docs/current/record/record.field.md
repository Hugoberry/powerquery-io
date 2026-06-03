---
title: Record.Field
---

# Record.Field


Devolve o valor do campo especificado num registo.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Devolve o valor do `field` especificado no `record`. Se o campo não for encontrado, é gerado um erro.


## Examples

### Example #1
Determinar o valor do campo "CustomerID" no registo.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
