---
title: Binary.Compress
---

# Binary.Compress


## Description

Сжимает двоичное значение с помощью заданного типа сжатия.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Сжимает двоичное значение с помощью заданного типа сжатия. Результат такого вызова — сжатая копия входных данных. Типы сжатия:   <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Сжатие двоичного значения.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
