---
title: Binary.Compress
---

# Binary.Compress


## Description

Kompresuje wartość binarną przy użyciu podanego typu kompresji.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Kompresuje wartość binarną przy użyciu podanego typu kompresji. Wynikiem tego wywołania jest skompresowana kopia danych wejściowych. Do typów kompresji należą:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Kompresuj wartość binarną.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
