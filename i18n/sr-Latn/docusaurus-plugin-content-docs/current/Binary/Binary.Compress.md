---
title: Binary.Compress
---

# Binary.Compress


## Description

Komprimuje binarnu vrednost pomoću datog tipa kompresije.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Komprimuje binarnu vrednost pomoću datog tipa kompresije.  Rezultat ovog tipa poziva je komprimovana kopija unosa. Tipovi kompresije uključuju:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Komprimujte binarnu vrednost.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
