---
title: Binary.Compress
---

# Binary.Compress


## Description

指定された圧縮の種類を使用して、バイナリ値を圧縮します。


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

指定された圧縮の種類を使用して、バイナリ値を圧縮します。この呼び出しの結果は、圧縮された入力のコピーです。圧縮の種類には次のものがあります。  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
バイナリ値を圧縮します。
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
