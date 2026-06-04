---
title: Binary.ToText
---

# Binary.ToText


將二進位資料解碼成文字格式。


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

傳回將二進位數字清單 `binary` 轉換成文字值的結果。您可選擇指定 `encoding`，以表示產生的文字值中要使用的編碼方式 下列 `BinaryEncoding` 值可用於 `encoding`。

-   `BinaryEncoding.Base64`: Base 64 編碼
-   `BinaryEncoding.Hex`: 十六進位編碼



## Category
Binary
