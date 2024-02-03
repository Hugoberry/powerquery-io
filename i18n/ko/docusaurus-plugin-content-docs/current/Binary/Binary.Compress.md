---
title: Binary.Compress
---

# Binary.Compress


## Description

제공된 압축 형식을 사용하여 이진 값의 압축을 풉니다.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

제공된 압축 형식을 사용하여 이진 값을 압축합니다. 이 호출을 수행하면 입력 항목의 압축된 복사본이 생성됩니다. 압축 형식은 다음과 같습니다.  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
이진 값을 압축합니다.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
