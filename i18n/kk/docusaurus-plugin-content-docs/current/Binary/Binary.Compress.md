---
title: Binary.Compress
---

# Binary.Compress


## Description

Берілген қысу түрін пайдаланып екілік мәнді қысады.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Берілген қысу түрін пайдаланып екілік мәнді қысады.  Бұл шақырудың нәтижесі кірістің қысылған көшірмесі болып табылады. Қысу түрлері келесіні қамтиды:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Екілік мәнді қысыңыз.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
