---
title: Binary.FromText
---

# Binary.FromText


將文字格式的資料解碼成二進位。


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

傳回將文字值 `text` 轉換成二進位 (`number` 清單) 的結果。您可指定 `encoding`，以表示文字值中使用的編碼方式。 下列 `BinaryEncoding` 值可用於 `encoding`。

-   `BinaryEncoding.Base64`: Base 64 編碼
-   `BinaryEncoding.Hex`: 十六進位編碼


## Examples

### Example #1
將 "1011" 解碼為二進位。
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
將 "1011" 解碼為十六進位編碼的二進位。
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
