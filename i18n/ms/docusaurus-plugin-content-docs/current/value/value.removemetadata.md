---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Meleraikan input metadata.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Meleraikan input metadata.


## Examples

### Example #1
Alih keluar semua metadata daripada nilai teks.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2])
)
```

Result: 
```powerquery
[]
```


### Example #2
Alih keluar hanya satu medan metadata daripada nilai teks.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2], {"a"})
)
```

Result: 
```powerquery
[b = 2]
```




## Category
Metadata
