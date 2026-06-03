---
title: Binary.FromText
---

# Binary.FromText


将来自文本格式的数据解码为二进制值。


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

返回将文本值 `text` 转换为二进制值(`number` 的列表)的结果。可以指定 `encoding` 以便指示在文本值中使用的编码。 以下 `BinaryEncoding` 值可用于 `encoding`。

-   `BinaryEncoding.Base64`: Base 64 编码
-   `BinaryEncoding.Hex`: 十六进制编码


## Examples

### Example #1
将 "1011" 解码为二进制值。
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
将 "1011" 解码为具有十六进制编码的二进制值。
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
