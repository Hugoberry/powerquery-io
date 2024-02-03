---
title: Binary.Compress
---

# Binary.Compress


## Description

Comprime un valore binario usando il tipo di compressione specificato.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Comprime un valore binario usando il tipo di compressione specificato. Il risultato della chiamata è una copia compressa dell'input. I tipi di compressione includono:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Comprimere il valore binario.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
