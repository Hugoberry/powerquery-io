---
title: Binary.Decompress
---

# Binary.Decompress


## Description

Descomprimeix un valor binari mitjançant un tipus de compressió concret.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Descomprimeix un valor binari mitjançant un tipus de compressió concret.  El resultat d'aquesta crida és una còpia descomprimida de l'entrada. Els tipus de compressió inclouen:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Descomprimeix el valor binari.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
