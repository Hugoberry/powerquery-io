---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Trả về một hàm kết hợp một danh sách văn bản bằng cách sử dụng các vị trí đầu ra được chỉ định.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Trả về một hàm kết hợp một danh sách giá trị văn bản thành một giá trị văn bản đơn bằng cách sử dụng vị trí đầu ra được chỉ định.


## Examples

### Example #1 
Kết hợp một danh sách giá trị văn bản bằng cách đặt chúng vào đầu ra tại các vị trí được chỉ định.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
