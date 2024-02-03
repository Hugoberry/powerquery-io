---
title: Binary.Decompress
---

# Binary.Decompress


## Description

제공된 압축 유형을 사용해서 이진 값의 압축을 풉니다.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

제공된 압축 유형을 사용해서 이진 값의 압축을 풉니다.  이 호출을 수행하면 입력 항목의 압축이 풀립니다. 압축 유형은 다음과 같습니다.  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
이진 값의 압축을 풉니다.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
