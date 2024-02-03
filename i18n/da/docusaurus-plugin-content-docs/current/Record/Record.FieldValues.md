---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Returnerer en liste over feltværdier.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Returnerer en liste over feltværdier i posten <code>record</code>.


## Examples

### Example #1 
Find feltværdierne i posten.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
