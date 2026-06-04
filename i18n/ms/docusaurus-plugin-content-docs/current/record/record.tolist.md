---
title: Record.ToList
---

# Record.ToList


Mengembalikan senarai nilai yang mengandungi nilai medan daripada rekod input.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Mengembalikan senarai nilai yang mengandungi nilai medan daripada input `record`.


## Examples

### Example #1
Ekstrak nilai medan daripada rekod.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
