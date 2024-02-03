---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Trả về một hàm kết hợp một danh sách văn bản bằng cách sử dụng độ dài được chỉ định.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Trả về một hàm kết hợp một danh sách giá trị văn bản thành một giá trị văn bản đơn bằng cách sử dụng độ dài được chỉ định.


## Examples

### Example #1 
Kết hợp một danh sách giá trị văn bản bằng cách trích xuất số lượng ký tự được chỉ định từ mỗi giá trị đầu vào.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Kết hợp một danh sách giá trị văn bản bằng cách trích xuất số lượng ký tự được chỉ định, sau khi điền trước kết quả với văn bản mẫu.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
