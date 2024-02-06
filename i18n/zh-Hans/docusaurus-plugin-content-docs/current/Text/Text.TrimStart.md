---
title: Text.TrimStart
---

# Text.TrimStart


删除所有前导空格。


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

返回从文本值 <code>text</code> 删除所有前导空格的结果。


## Examples

### Example #1 
从 &#34;     a b c d    &#34; 删除前导空格。
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
