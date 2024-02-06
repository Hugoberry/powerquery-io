---
title: Value.Is
---

# Value.Is


Xác định giá trị có tương thích với loại được chỉ định hay không.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Remarks

Xác định xem giá trị có tương thích với loại được chỉ định hay không. Cách này tương đương với toán tử “là” trong M, với ngoại lệ là có thể chấp nhận các thuộc tính loại mã định danh như Number.Type.


## Examples

### Example #1 
So sánh hai cách xác định xem một số có tương thích với số loại hay không.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
