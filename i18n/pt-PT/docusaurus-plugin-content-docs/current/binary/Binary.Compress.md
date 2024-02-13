---
title: Binary.Compress
---

# Binary.Compress


Comprime um valor binário, utilizando o tipo de compressão especificado.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Comprime um valor binário utilizando o tipo de compressão especificado. Esta chamada resulta numa cópia comprimida da informação. Os tipos de compressão incluem:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


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
