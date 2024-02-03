---
title: Binary.Decompress
---

# Binary.Decompress


## Description

指定された圧縮の種類を使用して、バイナリ値の圧縮を解除します。


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

指定された圧縮の種類を使用して、バイナリ値の圧縮を解除します。この呼び出しの結果は、圧縮が解除された入力のコピーです。圧縮の種類には次のものがあります。  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
バイナリ値の圧縮を解除します。
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
