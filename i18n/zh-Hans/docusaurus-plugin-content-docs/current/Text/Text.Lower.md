---
title: Text.Lower
---

# Text.Lower


将所有字符转换为小写。


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

返回将 <code>text</code> 中的所有字符转换为小写的结果。还可提供可选的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
获取 &#34;AbCd&#34; 的小写版本。
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
