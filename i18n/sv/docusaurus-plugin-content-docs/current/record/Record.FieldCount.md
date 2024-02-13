---
title: Record.FieldCount
---

# Record.FieldCount


Returnerar antalet fält i posten.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Returnerar antalet fält i posten <code>record</code>.


## Examples

### Example #1 
Hitta antalet fält i posten.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
