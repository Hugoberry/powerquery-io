---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Mem-buffer nilai biner dalam memori.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Mem-buffer nilai biner dalam memori.  Hasil pemanggilan ini adalah nilai biner stabil, yakni memiliki panjang deterministik dan urutan byte.


## Examples

### Example #1 
Membuat versi stabil dari nilai biner.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
