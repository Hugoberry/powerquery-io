---
title: Binary.Compress
---

# Binary.Compress


Nén giá trị nhị phân bằng cách sử dụng loại nén đã cho.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Nén giá trị nhị phân bằng loại nén đã cho. Kết quả của lệnh gọi này là bản sao dữ liệu đầu vào ở dạng nén. Các loại nén bao  gồm:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Nén giá trị nhị phân.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
