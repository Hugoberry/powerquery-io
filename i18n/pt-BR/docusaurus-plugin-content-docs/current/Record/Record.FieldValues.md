---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Retorna uma lista dos valores de campo.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Retorna uma lista dos valores de campo no registro <code>record</code>.


## Examples

### Example #1 
Localizar os valores de campo no registro.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
