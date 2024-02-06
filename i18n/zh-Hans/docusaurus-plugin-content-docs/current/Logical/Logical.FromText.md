---
title: Logical.FromText
---

# Logical.FromText


从文本值 &#34;true&#34; 和 &#34;false&#34; 创建逻辑值。


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

从文本值 <code>text</code>("true" 或 "false")创建逻辑值。如果 <code>text</code> 包含其他字符串，将引发异常。文本值 <code>text</code> 不区分大小写。


## Examples

### Example #1 
从文本字符串 &#34;true&#34; 创建逻辑值。
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
从文本字符串 &#34;a&#34; 创建逻辑值。
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
