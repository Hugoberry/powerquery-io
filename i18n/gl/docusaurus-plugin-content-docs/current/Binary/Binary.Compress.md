---
title: Binary.Compress
---

# Binary.Compress


## Description

Comprime un valor binario mediante o tipo de compresión dado.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Comprime un valor binario mediante o tipo de compresión dado. O resultado desta chamada é unha copia comprimida da entrada. Entre os tipos de compresión inclúense:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Comprima o valor binario.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
