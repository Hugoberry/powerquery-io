---
title: Record.FieldCount
---

# Record.FieldCount


Vraća broj polja u zapisu.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Vraća broj polja u zapisu `record`.


## Examples

### Example #1
Pronalaženje broja polja u zapisu.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
