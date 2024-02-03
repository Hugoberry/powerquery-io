---
title: Binary.Decompress
---

# Binary.Decompress


## Description

Descomprime un valor binario usando el tipo de compresión especificado.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Descomprime un valor binary con el tipo de compresión especificado. El resultado de esta llamada es una copia descomprimida de la entrada. Entre los tipos de compresión se incluyen:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Descomprime el valor binario.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
