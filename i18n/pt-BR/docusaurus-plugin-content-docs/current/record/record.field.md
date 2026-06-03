---
title: Record.Field
---

# Record.Field


Retorna o valor do campo especificado em um registro.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Retorna o valor do `field` especificado no `record`. Se o campo não for encontrado, um erro será gerado.


## Examples

### Example #1
Localizar o valor do campo " CustomerID " no registro.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
