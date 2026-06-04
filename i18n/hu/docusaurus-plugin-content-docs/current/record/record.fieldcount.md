---
title: Record.FieldCount
---

# Record.FieldCount


A rekord mezőinek számát adja vissza.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

A(z) `record` rekord mezőinek számát adja vissza.


## Examples

### Example #1
Megállapítja a rekordban levő mezők számát.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
