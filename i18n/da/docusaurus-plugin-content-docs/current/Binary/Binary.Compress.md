---
title: Binary.Compress
---

# Binary.Compress


Komprimerer en binær værdi ved hjælp af en angivet komprimeringstype.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Komprimerer en binær værdi ved hjælp af en angivet komprimeringstype. Resultatet af dette kald er en komprimeret kopi af inputtet. Der kan være følgende komprimeringstyper:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Komprimer den binære værdi.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
