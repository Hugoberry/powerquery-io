---
title: Binary.Compress
---

# Binary.Compress


## Description

Comprimeix un valor binari amb el tipus de compressió proporcionat.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Comprimeix un valor binary amb el tipus de compressió proporcionat. El resultat d'aquesta crida és una còpia comprimida de l'entrada. Entre els tipus de compressió s'inclouen aquests:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Comprimeix el valor binari.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
