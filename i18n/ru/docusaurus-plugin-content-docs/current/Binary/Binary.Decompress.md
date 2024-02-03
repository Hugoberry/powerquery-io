---
title: Binary.Decompress
---

# Binary.Decompress


## Description

Распаковать двоичное значение с применением указанного типа сжатия.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Распаковывает двоичное значение с помощью заданного типа сжатия. Результат такого вызова — распакованная копия входных данных. Типы сжатия:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Распаковать двоичное значение.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
