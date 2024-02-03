---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Vrne seznam vrednosti polj.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Vrne seznam vrednosti polj v zapisu <code>record</code>.


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
