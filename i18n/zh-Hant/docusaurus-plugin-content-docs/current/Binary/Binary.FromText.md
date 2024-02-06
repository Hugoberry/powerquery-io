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

傳回將文字值 <code>text</code> 轉換成二進位 (<code>number</code> 清單) 的結果。您可指定 <code>encoding</code>，以表示文字值中使用的編碼方式。      下列 <code>BinaryEncoding</code> 值可用於 <code>encoding</code>。      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 編碼</li>        <li><code>BinaryEncoding.Hex</code>: 十六進位編碼</li>      </ul>


## Examples

### Example #1 
將 &#34;1011&#34; 解碼為二進位。
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
將 &#34;1011&#34; 解碼為十六進位編碼的二進位。
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
