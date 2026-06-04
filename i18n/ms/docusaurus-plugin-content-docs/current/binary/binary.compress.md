---
title: Binary.Compress
---

# Binary.Compress


Memampat nilai perduaan menggunakan jenis pemampatan yang ditentukan.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Memampat nilai perduaan menggunakan jenis pemampatan yang ditentukan. Hasil untuk panggilan ini adalah salinan input termampat. Jenis pemampatan termasuk:

-   `Compression.GZip`
-   `Compression.Deflate`


## Examples

### Example #1
Memampatkan nilai perduaan.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
