---
title: Logical.FromText
---

# Logical.FromText


Tạo một giá trị lôgic từ các giá trị văn bản "true" và "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Tạo một giá trị lôgic từ các giá trị văn bản `text`, "true" hoặc "false". Nếu `text` chứa một chuỗi khác thì sẽ xuất hiện lỗi. Giá trị văn bản `text` không phân biệt chữ hoa/chữ thường.


## Examples

### Example #1
Tạo một giá trị lôgic từ chuỗi văn bản "true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Tạo một giá trị lôgic từ chuỗi văn bản "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
