---
title: Record.Field
---

# Record.Field


## Description

Devuelve el valor del campo especificado en un registro.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Devuelve el valor del <code>field</code> especificado en el <code>record</code>. Si el campo no se encuentra, se inicia una excepción.


## Examples

### Example #1 
Hallar el valor del campo &#34;CustomerID&#34; en el registro.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
