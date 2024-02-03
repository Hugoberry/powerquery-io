---
title: Binary.Compress
---

# Binary.Compress


## Description

Komprimuje binárnu hodnotu použitím zadaného typu kompresie.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Skomprimuje binárnu hodnotu použitím zadaného typu kompresie. Výsledkom tohto volania je komprimovaná kópia vstupu. Typy kompresie zahŕňajú:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Komprimujte binárnu hodnotu.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
