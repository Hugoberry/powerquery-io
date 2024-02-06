---
title: Binary.Buffer
---

# Binary.Buffer


Buffers the binary value in memory.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Remarks

Buffers the binary value in memory.  The result of this call is a stable binary value, which means it will have a deterministic length and order of bytes.


## Examples

### Example #1 
Create a stable version of the binary value.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
