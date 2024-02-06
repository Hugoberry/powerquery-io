---
title: Binary.Compress
---

# Binary.Compress


Komprimerar ett binärt värde med hjälp av den givna komprimeringstypen.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Komprimerar ett binärt värde med hjälp av den givna komprimeringstypen. Resultatet av det här anropet är en komprimerad kopia av indata. Komprimeringstyperna inkluderar:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Komprimerar det binära värdet.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
