---
title: Logical.ToText
---

# Logical.ToText


已知邏輯值，傳回文字 &#34;true&#34; 或 &#34;false&#34;。


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

根據邏輯值 <code>logicalValue</code> (<code>true</code> 或 <code>false</code>) 建立文字值。如果 <code>logicalValue</code> 不是邏輯值，則擲回例外狀況。


## Examples

### Example #1 
根據邏輯 &lt;code&gt;true&lt;/code&gt; 建立文字值。
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
