---
title: Record.FieldValues
---

# Record.FieldValues


Vrne seznam vrednosti polj.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Vrne seznam vrednosti polj v zapisu `record`.


## Examples

### Example #1
Poiščite vrednosti polj v zapisu.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
