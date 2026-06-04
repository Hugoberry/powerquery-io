---
title: Binary.Compress
---

# Binary.Compress


A megadott tömörítéstípussal tömöríti a bináris értékeket.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

A megadott tömörítési típussal tömöríti a bináris értékeket. A hívás eredménye a bemenet tömörített másolata. A tömörítési típusok a következők:

-   `Compression.GZip`
-   `Compression.Deflate`


## Examples

### Example #1
Bináris érték tömörítése.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
