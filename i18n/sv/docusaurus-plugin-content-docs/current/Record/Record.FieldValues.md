---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Returnerar en lista med fältvärdena.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Returnerar en lista med fältvärdena i posten <code>record</code>.


## Examples

### Example #1 
Hitta fältvärdena i posten.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
