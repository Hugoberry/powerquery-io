---
title: Binary.Decompress
---

# Binary.Decompress


## Description

Decomprime un valore binario utilizzando il tipo di compressione specificato.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Decomprime un valore binario usando il tipo di compressione specificato. Il risultato della chiamata è una copia decompressa dell'input. I tipi di compressione includono:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Decomprimere il valore binario.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
