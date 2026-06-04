---
title: Binary.ToText
---

# Binary.ToText


将二进制数据解码为文本格式。


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

返回将数值 `binary` 的二进制列表转换为文本值的结果。或者，可以指定 `encoding` 以便指示要在生成的文本值中使用的编码 以下 `BinaryEncoding` 值可用于 `encoding`。

-   `BinaryEncoding.Base64`: Base 64 编码
-   `BinaryEncoding.Hex`: 十六进制编码



## Category
Binary
