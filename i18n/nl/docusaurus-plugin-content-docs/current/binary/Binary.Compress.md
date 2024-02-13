---
title: Binary.Compress
---

# Binary.Compress


Hiermee wordt een binaire waarde gecomprimeerd met het opgegeven compressietype.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Hiermee wordt een binaire waarde gecomprimeerd met het opgegeven compressietype. Het resultaat van deze aanroep is een gecomprimeerde kopie van de invoer. Compressietypen zijn onder andere: <ul> <li><code>Compression.GZip</code></li> <li><code>Compression.Deflate</code></li> </ul>


## Examples

### Example #1 
De binaire waarde comprimeren.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
