---
title: Record.AddField
---

# Record.AddField


Adiciona um campo a um registo.


## Syntax

```powerquery
Record.AddField(
    record as record,
    fieldName as text,
    value as any,
    optional delayed as logical
) as record
```


## Remarks

Adicionada um campo a um registo `record`, com base no nome do campo `fieldName` e no valor `value` especificados.


## Examples

### Example #1
Adicionar o campo Endereço ao registo.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
