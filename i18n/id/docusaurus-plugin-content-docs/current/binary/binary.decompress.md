---
title: Binary.Decompress
---

# Binary.Decompress


Mendekompresi nilai biner menggunakan jenis kompresi yang tersedia.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Mendekompresi nilai biner menggunakan jenis kompresi yang tersedia. Hasil dari panggilan ini adalah salinan input yang didekompresi. Jenis kompresi mencakup:

-   `Compression.GZip`
-   `Compression.Deflate`


## Examples

### Example #1
Dekompresikan nilai biner.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
