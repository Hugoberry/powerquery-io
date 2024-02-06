---
title: Text.Upper
---

# Text.Upper


将所有字符转换为大写。


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

返回将 <code>text</code> 中的所有字符转换为大写的结果。还可提供可选的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
获取 &#34;aBcD&#34; 的大写版本。
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
