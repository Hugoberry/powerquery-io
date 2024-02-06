---
title: Binary.Decompress
---

# Binary.Decompress


Decomprimeert een binaire waarde met het opgegeven compressietype.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Hiermee wordt een binaire waarde gedecomprimeerd met het opgegeven compressietype. Het resultaat van deze aanroep is een gedecomprimeerde kopie van de invoer. Compressietypen zijn onder andere: <ul> <li><code>Compression.GZip</code></li> <li><code>Compression.Deflate</code></li> </ul>


## Examples

### Example #1 
Decomprimeer de binaire waarde.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
