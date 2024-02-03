---
title: Record.FieldCount
---

# Record.FieldCount


## Description

A rekord mezőinek számát adja vissza.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

A(z) <code>record</code> rekord mezőinek számát adja vissza.


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
