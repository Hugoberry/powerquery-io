---
title: Value.As
---

# Value.As


## Description

Trả về giá trị nếu giá trị tương thích với loại đã chỉ định.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Trả về giá trị nếu giá trị tương thích với loại được chỉ định hay không. Cách này tương đương với toán tử “như” trong M, với ngoại lệ là có thể chấp nhận các thuộc tính loại mã định danh như Number.Type.


## Examples

### Example #1 
Truyền một số sang một số.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Tìm cách truyền một giá trị văn bản sang một số.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
