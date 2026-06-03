---
title: Record.HasFields
---

# Record.HasFields


Indica se o registo tem os campos especificados.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Indica se o registo `record` tem os campos especificados em `fields`, devolvendo um valor lógico (true ou false). É possível especificar os valores de vários campos utilizando uma lista.


## Examples

### Example #1
Verificar se o registo tem o campo "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Verificar se o registo tem os campos "CustomerID" e "Address".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
