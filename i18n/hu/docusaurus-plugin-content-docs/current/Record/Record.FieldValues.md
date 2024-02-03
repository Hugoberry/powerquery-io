---
title: Record.FieldValues
---

# Record.FieldValues


## Description

A mezőértékek listáját adja vissza.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

A(z) <code>record</code> rekordban levő mezőértékek listáját adja vissza.


## Examples

### Example #1 
Megállapítja a rekordban levő mezők értékét.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
