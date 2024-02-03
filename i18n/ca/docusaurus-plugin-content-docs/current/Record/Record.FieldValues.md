---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Retorna una llista de valors del camp.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Retorna una llista de valors del camp al registre <code>record</code>.


## Examples

### Example #1 
Cerca els valors del camp al registre.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
