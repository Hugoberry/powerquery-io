---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Trả về true nếu tất cả các giá trị trong danh sách đáp ứng hàm điều kiện.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Trả về <code>true</code> nếu hàm điều kiện <code>condition</code> được đáp ứng bởi tất cả giá trị trong danh sách <code>list</code>, nếu không trả về <code>false</code>.


## Examples

### Example #1 
Xác định tất cả giá trị trong danh sách \{11, 12, 13} có lớn hơn 10 hay không.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Xác định tất cả giá trị trong danh sách \{1, 2, 3} có lớn hơn 10 hay không.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
