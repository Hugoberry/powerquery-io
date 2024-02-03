---
title: Binary.Compress
---

# Binary.Compress


## Description

Binārā vērtība tiek saspiesta, izmantojot norādīto saspiešanas tipu.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Saspiež bināro vērtību, izmantojot norādīto saspiešanas tipu. Veicot šo izsaukumu, tiek iegūta saspiesta ievadīto datu kopija. Ir pieejami tālāk norādītie saspiešanas tipi.  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Saspiediet bināro vērtību.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
