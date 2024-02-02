---
title: Logical.ToText
---

# Logical.ToText


## Description

Returns the text &#34;true&#34; or &#34;false&#34; given a logical value.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Creates a text value from the logical value <code>logicalValue</code>, either <code>true</code> or <code>false</code>. If <code>logicalValue</code> is not a logical value, an exception is thrown.


## Examples

### Example #1 
Create a text value from the logical &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
