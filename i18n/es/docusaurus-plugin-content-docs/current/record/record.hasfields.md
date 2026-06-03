---
title: Record.HasFields
---

# Record.HasFields


Indica si el registro tiene los campos especificados.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Indica si el registro `record` tiene los campos especificados en `fields` devolviendo un valor lógico (true o false). Se pueden especificar varios valores de campo con una lista.


## Examples

### Example #1
Comprobar si el registro tiene el campo "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Comprobar si el registro tiene el campo "CustomerID" y "Address".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
