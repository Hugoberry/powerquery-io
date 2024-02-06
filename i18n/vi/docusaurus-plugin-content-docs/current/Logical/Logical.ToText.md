---
title: Logical.ToText
---

# Logical.ToText


Trả về văn bản &#34;true&#34; hoặc &#34;false&#34; khi được cho sẵn một giá trị lôgic.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Tạo một giá trị văn bản từ giá trị lôgic <code>logicalValue</code>, <code>true</code> hoặc <code>false</code>. Nếu <code>logicalValue</code> không phải là giá trị lôgic thì một ngoại lệ được đưa ra.


## Examples

### Example #1 
Tạo một giá trị văn bản từ &lt;code&gt;true&lt;/code&gt; lôgic.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
