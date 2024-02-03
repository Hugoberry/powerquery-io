---
title: Binary.Compress
---

# Binary.Compress


## Description

Comprime un valor binario usando el tipo de compresión especificado.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Comprime un valor binary con el tipo de compresión especificado. El resultado de esta llamada es una copia comprimida de la entrada. Entre los tipos de compresión se incluyen:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Comprime el valor binario.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
