---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Vraća broj polja u zapisu.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Vraća broj polja u zapisu <code>record</code>.


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
