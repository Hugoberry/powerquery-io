---
title: Binary.From
---

# Binary.From


根據指定的值建立二進位


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

從指定的 `value` 傳回 `binary` 值。若指定的 `value` 是 `null`，則 `Binary.From` 會傳回 `null`。若指定的 `value` 是 `binary`，則會傳回 `value`。可以將下列類型的值轉換成 `binary` 值:

-   `text`: 以文字表示的 `binary` 值。如需詳細資料，請參閱 `Binary.FromText`。

若 `value` 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1
取得 `"1011"` 的 `binary` 值。
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
