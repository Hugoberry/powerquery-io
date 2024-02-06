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

Splits <code>binary</code> into a list of binaries where the first element of the output list is a binary containing the first <code>pageSize</code> bytes from    the source binary, the next element of the output list is a binary containing the next <code>pageSize</code> bytes from the source binary, and so on.



## Category
Binary
