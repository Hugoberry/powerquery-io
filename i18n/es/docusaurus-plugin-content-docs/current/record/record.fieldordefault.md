---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Devuelve el valor del campo especificado en un registro o el valor predeterminado si el campo no se encuentra.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Devuelve el valor del campo <code>field</code> especificado en el registro <code>record</code>. Si el campo no se encuentra, se devuelve el valor <code>defaultValue</code> opcional.


## Examples

### Example #1 
Buscar el valor del campo &#34;Phone&#34; en el registro o devolver NULL si no existe.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Buscar el valor del campo &#34;Phone&#34; en el registro o devolver el valor predeterminado si no existe.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
