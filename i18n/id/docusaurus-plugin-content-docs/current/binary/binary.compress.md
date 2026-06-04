---
title: Binary.Compress
---

# Binary.Compress


Mengompresi nilai biner yang menggunakan jenis kompresi yang diberikan.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Mengompresi nilai biner menggunakan jenis kompresi yang diberikan. Hasil dari panggilan ini adalah salinan input yang dikompresi. Jenis kompresi mencakup:

-   `Compression.GZip`
-   `Compression.Deflate`


## Examples

### Example #1
Kompresi nilai biner.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
