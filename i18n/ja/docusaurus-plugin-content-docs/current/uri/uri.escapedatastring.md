---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


RFC 3986 に準拠して特殊文字をエンコードします。


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

入力 `data` に含まれている特殊文字を RFC 3986 の規則に則ってエンコードします。


## Examples

### Example #1
特殊文字を "+money$" の形式でエンコードします。
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
