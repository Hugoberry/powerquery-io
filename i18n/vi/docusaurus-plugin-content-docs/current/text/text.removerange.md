---
title: Text.RemoveRange
---

# Text.RemoveRange


Loại bố số lượng ký tự bắt đầu tại phần bù cho sẵn


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Trả về một bản sao của giá trị văn bản `text` đã loại bỏ tất cả ký tự khỏi vị trí `offset`. Có thể dùng tham số tùy chọn `count` để chỉ định số lượng ký tự sẽ loại bỏ. Giá trị mặc định của `count` là 1. Giá trị vị trí bắt đầu tại 0.


## Examples

### Example #1
Loại bỏ 1 ký tự khỏi giá trị văn bản "ABEFC" tại vị trí 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Loại bỏ hai ký tự khỏi giá trị văn bản "ABEFC" bắt đầu tại vị trí 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
