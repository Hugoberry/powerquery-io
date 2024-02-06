---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


根据 RFC 3986 对特殊字符进行编码。


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

根据 RFC 3986 的规则对输入 <code>data</code> 中的特殊字符进行编码。


## Examples

### Example #1 
对“+money$”中的特殊字符进行编码。
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
