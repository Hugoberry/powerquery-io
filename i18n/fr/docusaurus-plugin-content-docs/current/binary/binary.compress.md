---
title: Binary.Compress
---

# Binary.Compress


Compresse une valeur binaire à l&#39;aide du type de compression donné.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Compresse une valeur binaire à l'aide du type de compression donné. Le résultat de cet appel est une copie compressée de l'entrée. Parmi les types de compression, citons :  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Compressez la valeur binaire.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
