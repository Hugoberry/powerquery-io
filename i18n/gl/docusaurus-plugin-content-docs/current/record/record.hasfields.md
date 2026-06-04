---
title: Record.HasFields
---

# Record.HasFields


Indica se o rexistro ten os campos especificados.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Indica se o rexistro `record` ten os campos especificados en `fields` devolvendo un valor lóxico (verdadeiro ou falso) Utilizando unha lista poden especificarse varios valores de campo.


## Examples

### Example #1
Comprobar se o rexistro ten o campo "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Comprobar se o rexistro ten os campos "CustomerID" e "Address".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
