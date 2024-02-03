---
title: Binary.Decompress
---

# Binary.Decompress


## Description

使用指定的壓縮類型將二進位值解壓縮。


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

使用指定的壓縮類型解壓縮二進位值。此呼叫的結果為輸入的解壓縮複本。壓縮類型包括:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
將二進位值解壓縮。
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
