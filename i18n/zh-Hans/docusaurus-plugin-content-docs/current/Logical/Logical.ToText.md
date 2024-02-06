---
title: Logical.ToText
---

# Logical.ToText


给定逻辑值返回文本 &#34;true&#34; 或 &#34;false&#34;。


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

从逻辑值 <code>logicalValue</code>(<code>true</code>或 <code>false</code>)创建文本值。如果 <code>logicalValue</code> 不是逻辑值，将引发异常。


## Examples

### Example #1 
从逻辑 &lt;code&gt;true&lt;/code&gt; 创建一个文本值。
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
