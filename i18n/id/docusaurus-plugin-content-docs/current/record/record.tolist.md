---
title: Record.ToList
---

# Record.ToList


Menghasilkan daftar nilai yang berisi nilai bidang dari data input.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Menghasilkan daftar nilai yang berisi nilai bidang dari input `record`.


## Examples

### Example #1
Mengekstrak nilai bidang dari data.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
