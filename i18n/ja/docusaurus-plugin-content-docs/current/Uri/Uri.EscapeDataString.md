---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

RFC 3986 に準拠して特殊文字をエンコードします。


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

入力 <code>data</code> に含まれている特殊文字を RFC 3986 の規則に則ってエンコードします。


## Examples

### Example #1 
特殊文字を &#34;+money$&#34; の形式でエンコードします。
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
