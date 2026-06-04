---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Devolve o valor do campo especificado nun rexistro ou o valor predefinido se o campo non se localiza.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Devolve o valor do campo especificado `field` no rexistro `record`. Se o campo non se localiza, devólvese o `defaultValue` opcional.


## Examples

### Example #1
Buscar o valor do campo "Teléfono" no rexistro ou devolver nulo se non existe.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Buscar o valor do campo "Teléfono" no rexistro ou devolver o valor predefinido se non existe.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
