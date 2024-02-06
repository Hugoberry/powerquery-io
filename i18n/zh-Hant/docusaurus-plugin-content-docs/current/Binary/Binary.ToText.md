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

傳回將二進位數字清單 <code>binary</code> 轉換成文字值的結果。您可選擇指定 <code>encoding</code>，以表示產生的文字值中要使用的編碼方式      下列 <code>BinaryEncoding</code> 值可用於 <code>encoding</code>。      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 編碼</li>        <li><code>BinaryEncoding.Hex</code>: 十六進位編碼</li>      </ul>



## Category
Binary
