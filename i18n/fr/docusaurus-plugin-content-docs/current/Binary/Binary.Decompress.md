---
title: Binary.Decompress
---

# Binary.Decompress


## Description

Décompresse une valeur binaire à l&#39;aide du type de compression donné.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Décompresse une valeur binaire à l'aide du type de compression donné. Le résultat de cet appel est une copie décompressée de l'entrée. Les types de compression incluent :  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Décompressez la valeur binaire.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
