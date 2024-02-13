---
title: Binary.Decompress
---

# Binary.Decompress


Dekomprimerer en binær værdi ved hjælp af en angivet komprimeringstype.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Dekomprimerer en binær værdi ved hjælp af en angivet komprimeringstype.  Resultatet af dette kald er en dekomprimeret kopi af inputtet. Der kan være følgende komprimeringstyper:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Dekomprimer den binære værdi.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
