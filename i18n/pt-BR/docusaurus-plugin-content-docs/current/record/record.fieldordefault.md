---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Retorna o valor do campo especificado em um registro ou o valor padrão se o campo não for encontrado.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Retorna o valor do campo `field` especificado no registro `record`. Se o campo não for encontrado, o `defaultValue` opcional será retornado.


## Examples

### Example #1
Localizar o valor do campo "Phone" no registro, ou retornar nulo, caso não exista.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Localizar o valor do campo "Phone" no registro, ou retornar o padrão, caso não exista.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
