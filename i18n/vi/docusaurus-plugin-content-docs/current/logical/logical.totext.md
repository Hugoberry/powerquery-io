---
title: Logical.ToText
---

# Logical.ToText


Trả về văn bản "true" hoặc "false" khi được cho sẵn một giá trị lôgic.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Tạo một giá trị văn bản từ giá trị lôgic `logicalValue`, `true` hoặc `false`. Nếu `logicalValue` không phải là giá trị lôgic thì lỗi sẽ xuất hiện.


## Examples

### Example #1
Tạo một giá trị văn bản từ `true` lôgic.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
