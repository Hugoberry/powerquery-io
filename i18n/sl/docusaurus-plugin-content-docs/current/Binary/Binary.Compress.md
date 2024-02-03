---
title: Binary.Compress
---

# Binary.Compress


## Description

Stisne dvojiško vrednost z uporabo navedene vrste stiskanja.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Stisne dvojiško vrednost z uporabo navedene vrste stiskanja.  Rezultat tega klica je stisnjena kopija vnosa. Vrste stiskanja so med drugim lahko:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Stisnite dvojiško vrednost.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
