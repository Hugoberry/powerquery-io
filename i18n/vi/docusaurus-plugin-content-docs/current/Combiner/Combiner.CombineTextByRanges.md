---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Trả về một hàm \kết hợp một danh sách văn bản bằng cách dùng các vị trí và độ dài được chỉ định.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Trả về một hàm kết hợp một danh sách giá trị văn bản thành một giá trị văn bản đơn bằng cách sử dụng vị trí đầu ra và độ dài được chỉ định. Độ dài null thể hiện rằng toàn bộ giá trị văn bản nên được đưa vào.


## Examples

### Example #1 
Kết hợp danh sách giá trị văn bản bằng cách sử dụng vị trí và độ dài đầu ra được chỉ định.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
