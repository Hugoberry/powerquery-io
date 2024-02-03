---
title: Binary.Decompress
---

# Binary.Decompress


## Description

Dekomprimerar ett binärvärde genom att använda den angivna komprimeringstypen.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Dekomprimerar ett binärt värde genom att använda den angivna komprimeringstypen. Resultatet av det här anropet är en dekomprimerad kopia av indata. Komprimeringstyper inkluderar:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Dekomprimerar binärvärdet.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
