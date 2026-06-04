---
title: Record.FieldCount
---

# Record.FieldCount


Vrne število polj v zapisu.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Vrne število polj v zapisu `record`.


## Examples

### Example #1
Poiščite število polj v zapisu.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
