---
title: Binary.Range
---

# Binary.Range


## Description

Menghasilkan subset nilai biner yang dimulai pada offset.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Menghasilkan subset nilai biner yang dimulai pada offset <code>binary</code>. Parameter opsional, <code>offset</code>, menentukan panjang maksimum subset.


## Examples

### Example #1 
Menghasilkan subset nilai biner yang dimulai pada offset 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Menghasilkan subset panjang 2 dari offset 6 nilai biner.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
