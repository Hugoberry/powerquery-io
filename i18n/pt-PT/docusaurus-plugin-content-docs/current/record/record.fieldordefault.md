---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Devolve o valor do campo especificado num registo ou o valor predefinido se o campo não for encontrado.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Devolve o valor do campo especificado `field` no registo `record`. Se o campo não for encontrado, o `defaultValue` opcional é devolvido.


## Examples

### Example #1
Determinar o valor do campo "Telefone" no registo ou devolver null se não existir.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Determinar o valor do campo "Telefone" no registo ou devolver a predefinição se não existir.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
