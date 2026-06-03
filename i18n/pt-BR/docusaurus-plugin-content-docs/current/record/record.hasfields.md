---
title: Record.HasFields
---

# Record.HasFields


Indica se o registro tem os campos especificados.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Indica se o registro `record` os campos especificados em `fields`, retornando um valor lógico (true ou false). Vários valores de campo podem ser especificados por meio de uma lista.


## Examples

### Example #1
Verificar se o registro tem o campo "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Verificar se o registro tem os campos "CustomerID" e "Address".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
