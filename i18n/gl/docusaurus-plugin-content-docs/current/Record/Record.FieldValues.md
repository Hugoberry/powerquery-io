---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Devolve unha lista de valores de campo.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Devolve unha lista de valores de campo no rexistro <code>record</code>.


## Examples

### Example #1 
Buscar os valores de campo no rexistro.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
