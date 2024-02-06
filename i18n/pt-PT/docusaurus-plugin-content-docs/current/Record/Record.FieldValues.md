---
title: Record.FieldValues
---

# Record.FieldValues


Devolve uma lista dos valores dos campos.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Devolve uma lista dos valores dos campos existentes no registo <code>record</code>.


## Examples

### Example #1 
Determinar os valores dos campos no registo.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
