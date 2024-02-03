---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

依據 RFC 3986 將特殊字元編碼。


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

依據 RFC 3986 將輸入 <code>data</code> 中的特殊字元編碼。


## Examples

### Example #1 
將 &#34;+money$&#34; 中的特殊字元編碼。
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
