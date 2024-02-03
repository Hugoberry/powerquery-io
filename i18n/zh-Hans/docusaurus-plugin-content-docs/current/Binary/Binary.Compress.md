---
title: Binary.Compress
---

# Binary.Compress


## Description

使用给定的压缩类型压缩二进制值。


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

使用给定的压缩类型压缩二进制值。此调用的结果是输入的压缩后副本。压缩类型包括:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
压缩二进制值。
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
