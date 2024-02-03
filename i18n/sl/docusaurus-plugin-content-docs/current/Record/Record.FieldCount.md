---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Vrne število polj v zapisu.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Vrne število polj v zapisu <code>record</code>.


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
