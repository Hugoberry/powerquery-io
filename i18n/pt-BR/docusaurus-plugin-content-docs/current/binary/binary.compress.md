---
title: Binary.Compress
---

# Binary.Compress


Comprime um valor binário usando o tipo de compressão indicado.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Comprime um valor binário usando o tipo de compressão indicado. O resultado desta chamada é uma cópia compactada da entrada. Os tipos de compactação incluem:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Comprime o valor binário.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
