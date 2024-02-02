---
title: Binary.Range
---

# Binary.Range


## Description

Returns a subset of the binary value beginning at an offset.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Returns a subset of the binary value beginning at the offset <code>binary</code>. An optional parameter, <code>offset</code>, sets the maximum length of the subset.


## Examples

### Example #1 
Returns a subset of the binary value starting at offset 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Returns a subset of length 2 from offset 6 of the binary value.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
