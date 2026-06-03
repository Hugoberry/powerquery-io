---
title: Binary.From
---

# Binary.From


从给定的值创建一个二进制值


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

从给定的 `value` 返回 `binary` 值。如果给定的 `value` 是 `null`，则 `Binary.From` 将返回 `null`。如果给定的 `value` 是 `binary`，则返回 `value`。以下类型的值可以转换为 `binary` 值:

-   `text`: 文本表示形式的 `binary` 值。有关详细信息，请参阅 `Binary.FromText`。

如果 `value` 属于任何其他类型，则返回错误。


## Examples

### Example #1
获取 `"1011"` 的 `binary` 值。
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
