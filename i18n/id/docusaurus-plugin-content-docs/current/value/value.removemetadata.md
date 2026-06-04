---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Menstrip input metadata.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Menstrip input metadata.


## Examples

### Example #1
Hapus semua metadata dari nilai teks.
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
Hapus hanya satu bidang metadata dari nilai teks.
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
