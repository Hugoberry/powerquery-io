---
title: Logical.FromText
---

# Logical.FromText


Tạo một giá trị lôgic từ các giá trị văn bản &#34;true&#34; và &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Tạo một giá trị lôgic từ các giá trị văn bản <code>text</code>, "true" hoặc "false". Nếu <code>text</code> chứa một chuỗi khác thì một ngoại lệ được đưa ra. Giá trị văn bản <code>text</code> không phân biệt chữ hoa/chữ thường.


## Examples

### Example #1 
Tạo một giá trị lôgic từ chuỗi văn bản &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Tạo một giá trị lôgic từ chuỗi văn bản &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
