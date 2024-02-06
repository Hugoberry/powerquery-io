---
title: Binary.Compress
---

# Binary.Compress


使用給定的壓縮類型壓縮二進位值。


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

使用指定的壓縮類型壓縮二進位值。此呼叫的結果為輸入的壓縮副本。壓縮類型包括:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
壓縮二進位值。
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
