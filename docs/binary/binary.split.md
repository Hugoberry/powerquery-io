---
title: Binary.Split
---

# Binary.Split


Splits the specified binary into a list of binaries using the specified page size.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Splits `binary` into a list of binaries where the first element of the output list is a binary containing the first `pageSize` bytes from the source binary, the next element of the output list is a binary containing the next `pageSize` bytes from the source binary, and so on.



## Category
Binary
